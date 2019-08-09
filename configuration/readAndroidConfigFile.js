const configData = require(`${process.argv[2]}`);

const resultFlavoursData = [];

for (const flavourName of Object.keys(configData.flavours)) {
  for (const flavourBuildVariant of Object.keys(
    configData.flavours[flavourName],
  )) {
    const flavourData = {};
    flavourData.name = flavourName;
    flavourData.buildVariant = flavourBuildVariant;

    const keyData =
      configData.keys[configData.flavours[flavourName][flavourBuildVariant]];

    flavourData.storeFile = keyData.storeFile;
    flavourData.storePassword = keyData.storePassword;
    flavourData.keyAlias = keyData.keyAlias;
    flavourData.keyPassword = keyData.keyPassword;

    resultFlavoursData.push(flavourData);
  }
}

for (const flavourData of resultFlavoursData) {
  const storeFile = `${flavourData.name}_${
    flavourData.buildVariant
  }_StoreFile=${flavourData.storeFile}`;

  const storePassword = `${flavourData.name}_${
    flavourData.buildVariant
  }_StorePassword=${flavourData.storePassword}`;

  const keyAlias = `${flavourData.name}_${flavourData.buildVariant}_KeyAlias=${
    flavourData.keyAlias
  }`;

  const keyPassword = `${flavourData.name}_${
    flavourData.buildVariant
  }_KeyPassword=${flavourData.keyPassword}`;

  console.log('storeFile:', storeFile);
  console.log('storePassword:', storePassword);
  console.log('keyAlias:', keyAlias);
  console.log('keyPassword:', keyPassword);
}

//FlAVOR_RELEASE_storeFile | storePassword | keyAlias | keyPassword
