const { exec } = require("child_process");

const command = `npx babel-node src/${process.argv[2]} --extensions \".ts\"`

exec(command, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(stdout);
});

// Example: "node run factory-and-facade.ts"