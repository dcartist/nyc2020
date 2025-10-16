import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import { Dimmer, Loader, Header, Segment, Icon, Button } from 'semantic-ui-react';

const Job_Detail = () => {
  const { jobId } = useParams();
  const history = useHistory();
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    const fetchData = async () => {
      try {
        const url = `https://whispering-bayou-30290.herokuapp.com/api/job/id/${jobId}`;
        const res = await axios.get(url);
        if (cancelled) return;
        const data = res?.data;
        const list = Array.isArray(data) ? data : (data ? [data] : []);
        setResults(list);
      } catch (err) {
        if (!cancelled) {
          console.error(err);
          setResults([]);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchData();
    return () => { cancelled = true; };
  }, [jobId]);

  // Log when results actually updates
  useEffect(() => {
    if (results !== null) console.log('results changed:', results);
  }, [results]);

  const goBack = useCallback(() => history.goBack(), [history]);
  const cap = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : 'n/a');

  if (loading || results === null) {
    return (
      <Dimmer active inverted>
        <Loader size="big" inverted>Loading</Loader>
      </Dimmer>
    );
  }

  if (results.length === 0) {
    return (
      <Segment placeholder>
        <Header>No job found</Header>
        <Button onClick={goBack} color="grey">Previous Page</Button>
      </Segment>
    );
  }

  return (
    <div>
      <Segment inverted color="grey">
        <Icon name="backward" size="large" onClick={goBack} />
        <Button onClick={goBack} color="grey">Previous Page</Button>
      </Segment>

      {results.map((item, index) => (
        <div key={index} className="JobDetail">
          <Segment.Group raised>
            <Header as="h3" attached="top" block>Contractor</Header>
            <Segment attached color="blue">
              Name: {cap(item?.contractor?.conFirstName)} {cap(item?.contractor?.conLastName)}
            </Segment>
            <Segment attached>ID: {item?.contractor?.conLicense || 'n/a'}</Segment>
          </Segment.Group>

          <Segment.Group raised>
            <Header as="h3" attached="top" block>Owner</Header>
            <Segment attached color="blue">
              Owner Name: {item?.owner?.ownFirstName || 'n/a'} {item?.owner?.ownLastName || 'n/a'}
            </Segment>
            <Segment attached>Business Name: {item?.owner?.ownBusinessName || 'n/a'}</Segment>
            <Segment attached>Owner Type: {item?.owner?.ownType || 'n/a'}</Segment>
          </Segment.Group>

          <Segment.Group raised>
            <Header as="h3" attached="top" block>Property</Header>
            <Segment attached color="blue">Address: {item?.property?.address || 'n/a'}</Segment>
            <Segment attached>City: {item?.property?.city || 'n/a'}</Segment>
            <Segment attached>Borough: {item?.property?.borough || 'n/a'}</Segment>
            <Segment attached>Property Type: {item?.property?.propType || 'n/a'}</Segment>
            <Segment attached>Property Description: {item?.property?.jobDescr || 'n/a'}</Segment>
          </Segment.Group>
        </div>
      ))}
    </div>
  );
};

export default Job_Detail;
