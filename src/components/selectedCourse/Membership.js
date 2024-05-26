import React from 'react'
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import './membershipStyle.css'
import { Card } from 'react-bootstrap';

const Container = styled.div`
  max-width: 500px;
  margin: 50px auto;
  padding: 20px;
  background: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 10px;
  color: #555;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px;
  background: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #0056b3;
  }
`;

function Membership() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
    alert('Payment Successful');
  };
  
  return (
    <div id='memParent'>
        <Card id='memContainer'>
            <Title>Payment Page</Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Label htmlFor="name">Name on Card</Label>
                <Input 
                id="name" 
                {...register('name', { required: true })} 
                />
                {errors.name && <span>This field is required</span>}

                <Label htmlFor="cardNumber">Card Number</Label>
                <Input 
                id="cardNumber" 
                {...register('cardNumber', { required: true, minLength: 16, maxLength: 16 })} 
                />
                {errors.cardNumber && <span>Card number must be 16 digits</span>}

                <Label htmlFor="expiry">Expiry Date</Label>
                <Input 
                id="expiry" 
                {...register('expiry', { required: true })} 
                />
                {errors.expiry && <span>This field is required</span>}

                <Label htmlFor="cvv">CVV</Label>
                <Input 
                id="cvv" 
                {...register('cvv', { required: true, minLength: 3, maxLength: 3 })} 
                />
                {errors.cvv && <span>CVV must be 3 digits</span>}

                <Button type="submit">Pay Now</Button>
            </Form>
        </Card>
    </div>
  )
}

export default Membership