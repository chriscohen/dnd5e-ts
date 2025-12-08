import {test, expect} from "vitest";
import {CampaignSettingJsonItem, createCampaignSetting} from "../../src";

test.each([
    [
        'Birthright',
        {
            id: "2c39d46d-f6ff-4769-8803-d93015df5c81",
            name: "Birthright",
            shortName: "BR",
            publisher: "wizards-of-the-coast",
            publicationType: "official"
        },
        "2c39d46d-f6ff-4769-8803-d93015df5c81",
        "Birthright",
        "BR",
        "wizards-of-the-coast",
        "official"
    ]
])('Test loading the JSON for the %s campaign setting', (
    name: string,
    json: CampaignSettingJsonItem,
    expectedId: string,
    expectedName: string,
    expectedShortName: string
    /*expectedPublisher: string,
    expectedPublicationType: string*/
) => {
    const campaignSetting = createCampaignSetting().fromJson(json);
    expect(campaignSetting.id).toBe(expectedId);
    expect(campaignSetting.name).toBe(expectedName);
    expect(campaignSetting.shortName).toBe(expectedShortName);
    //expect(campaignSetting.publisher).toBe(expectedPublisher);
    //expect(campaignSetting.publicationType).toBe(expectedPublicationType);
})
