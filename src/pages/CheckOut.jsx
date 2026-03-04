<form onSubmit={handleSubmit}>
    <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={buyer.name}
        onChange={handleChange}
        required
    />

    <input
        type="tel"
        name="phone"
        placeholder="Teléfono"
        value={buyer.phone}
        onChange={handleChange}
        required
    />

    <input
        type="email"
        name="email"
        placeholder="Email"
        value={buyer.email}
        onChange={handleChange}
        required
    />

    <button type="submit" disabled={loading}>
        {loading ? "Procesando..." : "Confirmar compra"}
    </button>
</form>