const {By,Builder} = require("selenium-webdriver");
const AxeBuilder = require("@axe-core/webdriverjs");

const accessibilityTest = async () => {

    let driver = await new Builder().forBrowser("chrome").build();

    let critical = 0;
    let serious = 0;
    let moderate = 0;

    await driver.get("https://localhost:3000").then(() => {
        new AxeBuilder(driver).configure({ reporter: "no-passes" })
            .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
            .analyze((err, results) => {
                if (err) {
                    console.log(err);
                }
            })
            .then(results => {

                let log = 'Violations list: \n'

                console.log('\x1b[43mViolations list:\033[0m');
                results.violations.map(v => {
                        if (v.impact === 'serious') {
                            serious += 1;
                        } else if (v.impact === 'moderate') {
                            moderate += 1;
                        }
                        else if (v.impact === 'critical') {
                            critical += 1;
                        }
                        log += `
                        * ${v.id} --- ${v.impact} --- ${v.help} --- ${v.helpUrl}`;


                    }
                )
                console.log(`critical: ${critical}`);
                console.log(`moderate: ${moderate}`);
                console.log(`serious: ${serious}`);
                console.log(log);
            })
        ;
    });

    await driver.findElement(By.xpath("//*[@data-testid='heading']"));

    setTimeout(() => {driver.quit();}, 2000);

}

accessibilityTest();