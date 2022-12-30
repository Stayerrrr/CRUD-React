import React, {useState, useContext, useEffect} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Link, useNavigate, } from 'react-router-dom'
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap'

export const EditUser = (props) => {
  const [selectedUser, setSelectedUser] = useState ({
    id: '',
    name: ''
  });
  const {users, editUser} = useContext(GlobalContext)
  const navigate = useNavigate();
  const currentUserId  = props.match?.params.id

  useEffect(() => {
    const userId = currentUserId;
    const selectedUser = users.find(user => user.id === Number(userId))
    setSelectedUser(selectedUser)
  }, [currentUserId, users])

  const onSubmit = () => {
    editUser(selectedUser)
    navigate('/');
  }

  const onChange = (e) => {
    setSelectedUser({...selectedUser, [e.target.name]: e.target.value})
  }
  return (
    <Form onSubmit={onSubmit}>
    <FormGroup>
      <Label>Masukan Nama Siswa</Label>
      <Input type='text' name="name" value={selectedUser?.name} onChange={onChange} placeholder='nama siswa'></Input>
    </FormGroup>
    <Button type='submit'>Edit Name</Button>
    <Link to='/' className="btn btn-danger">Cancel</Link>
   </Form>
  )
}
