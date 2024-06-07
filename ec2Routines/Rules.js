let AWS = require("aws-sdk");
require("dotenv").config();

class Rules {
  /**
   * Constrói conexão com AWS
   */
  constructor() {
    this.AWS = new AWS.Config({
      accessKeyId: process.env.ACCESS_KEY_ID,
      secretAccessKey: process.env.SECRET_ACCESS_KEY,
      region: process.env.REGION,
    });

    //RDS Object
    this.EC2 = new AWS.EC2();
  }

  /**
   * Start instance
   */
  async startInstance(instance) {
    await this.EC2.startInstances({
      InstanceIds: [instance],
    })
      .promise()
      .then((res) => {
        console.log(`Instância ${instance} iniciada`);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  /**
   * Stop instance
   *  */
  async stopInstance(instance) {
    await this.EC2.stopInstances({
      InstanceIds: [instance],
    })
      .promise()
      .then((res) => {
        console.log(`Instância ${instance} parada`);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = Rules;
