import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class CampsiteInfo extends Component {

    renderCampsite(campsite) {
        return (
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }

    renderComments(comments) {
        if (comments) {
            return (
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map(comment=> {
                       return <div>{comment.text} <br/> -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} <br/><br/></div>
                    })}
                </div>
            );
        } return <div></div>
    }


    render() {
        if (this.props.propsForCampsiteFromDirectory) {
            return (
                <div>
                    <div className="row">{this.renderCampsite(this.props.propsForCampsiteFromDirectory)}</div>
                    <div>{this.renderComments(this.props.propsForCampsiteFromDirectory.comments)}</div>
                </div>
            );
        }
        return <div></div>
    }
}

export default CampsiteInfo
