const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')

Database.then( async (db) => {
    // Inserir dados na tabela
    // await saveOrphanage(db, {
    //     lat: "-22.356788",
    //     lng: "-47.3840934",
    //     name: "Lar das Meninas",
    //     about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    //     whatsapp: "19996837000",
    //     images: [
    //         "https://images.unsplash.com/photo-1595814359800-29f5de24ab0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    //         "https://images.unsplash.com/photo-1518842023089-50e9ac314ad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80",
    //         "https://images.unsplash.com/photo-1524855567984-d7bbc2893539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    //     ].toString(),
    //     instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    //     opening_hours: "Horário de visitas Das 18h até 8h",
    //     open_on_weekends: "1",
    // });

    // Consultar dados na tabela
    const selectedOrphanages = await db.all('SELECT * FROM orphanages');
    console.log(selectedOrphanages);

    // Consultar somente um orfanato pelo ID
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    //console.log(orphanage);

    // Deletar dado da tabela
    //await db.run('DELETE FROM orphanages WHERE id = "3"')
})