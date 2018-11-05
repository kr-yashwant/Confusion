import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

class Dishdetail extends Component {
    constructor(props) {
        super(props);
        this.selectedDish = props.selectedDish;
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
        const comments = dish == null ? [] : dish.comments;
        const commentList = (
            comments.map((comment) => {
                return (
                    <li>
                        <div>
                            {comment.comment}
                        </div>
                        <div>
                            -- {comment.author}, {comment.date}
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
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.selectedDish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.selectedDish)}
                </div>
            </div>
        );
    }
}

export default Dishdetail;
