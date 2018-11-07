import React, { Component } from 'react';
import { Card, CardImg,  CardImgOverlay, CardTitle} from 'reactstrap';
import Dishdetail from './DishdetailComponent';

class Menu extends Component {

    onSampleClick(id) {
        this.props.onClick(id);
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onSampleClick(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardImgOverlay>
                            <CardTitle> {dish.name} </CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <Dishdetail selectedDish={this.props.dish} />
            </div>
        );
    }
}

export default Menu;