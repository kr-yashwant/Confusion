import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

class Dishdetail extends Component {

    constructor(props) {
        super(props);
        console.log(props.selectedDish);
    }

    renderDish = (dish) => {
        return dish == null? '' :
        (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle> {dish.name} </CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    renderComments = (dish) => {
        console.log('Inside renderComments:: The value of dish is :'+ dish);
        const comments = dish == null ? [] : dish.comments;
        const commentList = (
            comments.map((comment) => {
                return (
                    <li key={comment.comment}>
                        <div>
                            {comment.comment}
                        </div>
                        <div>
                            -- {comment.author}, 
                            {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                        </div>
                    </li>
                );
            })
        );
        return (
            commentList.length ?
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {commentList}
                </ul>
            </div>
            :
            <div>

            </div>
        );
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Dishdetail;
