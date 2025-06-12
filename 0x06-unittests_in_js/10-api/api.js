app.use(express.json());

app.get('/available_payments', (req, res) => {
    res.json({ payment_methods: { credit_cards: true, paypal: false } });
});

app.post('/login', (req, res) => {
    res.send(`Welcome ${req.body.userName}`);
});
