import { TextField, Stack } from "@mui/material";

type SignupFormProps = {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  error: string | null;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function SignupForm(props: SignupFormProps) {
  return (
    <form
      autoComplete="off"
      id="login-form"
      onSubmit={(e) => props.handleSubmit(e)}
    >
      <Stack spacing={3}>
        <TextField
          id="outlined-email"
          label="Email"
          value={props.email}
          required
          type="email"
          color="secondary"
          variant="outlined"
          onChange={(e) => props.setEmail(e.target.value)}
        />
        <TextField
          id="outlined-name"
          label="Name"
          value={props.name}
          type="text"
          required
          color="secondary"
          variant="outlined"
          onChange={(e) => props.setName(e.target.value)}
        />
        <TextField
          id="outlined-password"
          label="Password"
          value={props.password}
          required
          helperText={props.error}
          type="password"
          color="secondary"
          variant="outlined"
          onChange={(e) => props.setPassword(e.target.value)}
        />
      </Stack>
    </form>
  );
}
