/**
 * @name DE
 * @author e.7528
 * @authorId 278543574059057154
 * @version 1.0.0 [Beta]
 * @description The plugin to change Discord with all Discord Edit theme by css injection.
 * @website https://evounnn.github.io/
 * @invite pMu2X4w3ru
 * @updateUrl 
*/

module.exports = meta => {
  return {
    start: () => {
      const doc = document.querySelector("head")
      BdApi.DOM.addStyle("DE_injcssbyplug", `@import url("https://evounnn.github.io/DiscordEdit/discord_theme/DiscordEditUpdate.theme.css"); @import url("https://evounnn.github.io/DiscordEdit/discord_theme/icons_mwittrien.theme.css");`);
      const DEsettings = BdApi.Data.load("DE", "DEsettings");
      function Loadset() {
        if (DEsettings.setting1 === "true") {
          BdApi.DOM.addStyle("DESmallSettings_injcssbyplug", `@import url("https://evounnn.github.io/DiscordEdit/discord_theme/DiscordEdit_small_settings.theme.css");`);
        } else {
          BdApi.DOM.removeStyle("DESmallSettings_injcssbyplug");
        };
        if (DEsettings.setting2 === "true") {
          BdApi.DOM.addStyle("Horizontal_Server_List_DiscordEdit_injcssbyplug", `@import url("https://evounnn.github.io/DiscordEdit/discord_theme/Horizontal_Server_List_DiscordEdit.theme.css");`);
        } else {
          BdApi.DOM.removeStyle("Horizontal_Server_List_DiscordEdit_injcssbyplug");
        };
      };
      Loadset();
    },
    stop: () => {
      BdApi.DOM.removeStyle("DE_injcssbyplug");
      BdApi.DOM.removeStyle("DESmallSettings_injcssbyplug");
      BdApi.DOM.removeStyle("Horizontal_Server_List_DiscordEdit_injcssbyplug");
    },
    getSettingsPanel: () => {
        const DEsettings = BdApi.Data.load("DE", "DEsettings");

        const mySettingsPanel = document.createElement("div");
        mySettingsPanel.id = "my-settings";

        // deSmallSettings

        const deSmallSettingsText = document.createElement("div");
        deSmallSettingsText.classList.add("setting");

        const deSmallSettingsLabel = document.createElement("span");
        deSmallSettingsLabel.textContent = "Discord Edit Small Settings";
        deSmallSettingsLabel.style = "color : White;";

        const deSmallSettingsInput = document.createElement("input");
        deSmallSettingsInput.class = "checkbox_a"
        deSmallSettingsInput.type = "checkbox";
        deSmallSettingsInput.style = "position: absolute;right: 5%;"
        deSmallSettingsInput.id = "deSmallSettings";

        // Horizontal_Server_List_DiscordEdit

        const Horizontal_Server_List_DiscordEdit_Text = document.createElement("div");
        Horizontal_Server_List_DiscordEdit_Text.classList.add("setting");

        const Horizontal_Server_List_DiscordEdit_Label = document.createElement("span");
        Horizontal_Server_List_DiscordEdit_Label.textContent = "Horizontal Server List for DiscordEdit (Gibbu#1211)";
        Horizontal_Server_List_DiscordEdit_Label.style = "color : White;";

        const Horizontal_Server_List_DiscordEdit_Input = document.createElement("input");
        Horizontal_Server_List_DiscordEdit_Input.class = "checkbox_a"
        Horizontal_Server_List_DiscordEdit_Input.type = "checkbox";
        Horizontal_Server_List_DiscordEdit_Input.style = "position: absolute;right: 5%;"
        Horizontal_Server_List_DiscordEdit_Input.id = "Horizontal_Server_List_DiscordEdit";

        // deSave

        function Saved() {
          if (document.getElementById('deSmallSettings').checked == true){
            BdApi.DOM.addStyle("DESmallSettings_injcssbyplug", `@import url("https://evounnn.github.io/DiscordEdit/discord_theme/DiscordEdit_small_settings.theme.css");`);
            DEsettings.setting1 = "true";
            BdApi.Data.save("DE", "DEsettings", DEsettings);
          }else{
            BdApi.DOM.removeStyle("DESmallSettings_injcssbyplug");
            DEsettings.setting1 = "false";
            BdApi.Data.save("DE", "DEsettings", DEsettings);
          };
          if (document.getElementById('Horizontal_Server_List_DiscordEdit').checked == true){
            BdApi.DOM.addStyle("Horizontal_Server_List_DiscordEdit_injcssbyplug", `@import url("https://evounnn.github.io/DiscordEdit/discord_theme/Horizontal_Server_List_DiscordEdit.theme.css");`);
            DEsettings.setting2 = "true";
            BdApi.Data.save("DE", "DEsettings", DEsettings);
          }else{
            BdApi.DOM.removeStyle("Horizontal_Server_List_DiscordEdit_injcssbyplug");
            DEsettings.setting2 = "false";
            BdApi.Data.save("DE", "DEsettings", DEsettings);
          };
        };

        Horizontal_Server_List_DiscordEdit_Input.addEventListener("click", () => {
          Saved();
        });
        deSmallSettingsInput.addEventListener("click", () => {
          Saved();
        });

        if (DEsettings.setting1 == "true") {
            deSmallSettingsInput.checked = true;
        };
        if (DEsettings.setting2 == "true") {
            Horizontal_Server_List_DiscordEdit_Input.checked = true;
        };

        deSmallSettingsText.append(deSmallSettingsLabel, deSmallSettingsInput);
        Horizontal_Server_List_DiscordEdit_Text.append(Horizontal_Server_List_DiscordEdit_Label, Horizontal_Server_List_DiscordEdit_Input);

        mySettingsPanel.append(deSmallSettingsText, document.createElement("br"), Horizontal_Server_List_DiscordEdit_Text, document.createElement("br"));

        return mySettingsPanel;
    }
  }
};
