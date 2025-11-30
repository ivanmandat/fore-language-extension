# FontBox.getColorCombo

FontBox.getColorCombo
-


# FontBox.getColorCombo


## Синтаксис


getColorCombo ()


## Описание


Метод getColorCombo возвращает компонент [ColorCombo](../ColorCombo/ColorCombo.htm), который используется для выбора цвета текста.


## Пример


Для выполнения примера предполагается наличие на странице компонента FontBox с наименованием «textSettings». В теге BODY добавьте элементы DIV с идентификаторами «check1», «check2», «check3», «check4». Добавим флажки, при установке/снятии которых будут активироваться/деактивироваться различные компоненты, входящие в состав [FontBox](../../Components/FontBox/FontBox.htm):


      //определяем активность раскрывающегося списка для выбора цвета
      var checkBox1 = new PP.Ui.CheckBox(
       {
           Content: "ColorCombo",
           CheckedChanged: checkedColor,
           ParentNode: document.getElementById("check1")
       })
           function checkedColor()
           {
               if (checkBox1.getChecked() == true)
               {
                   textSettings.getColorCombo().setEnabled(true)
               }
               else textSettings.getColorCombo().setEnabled(false)
           }
      //определяем активность раскрывающегося списка для выбора семейства шрифта
      var checkBox2 = new PP.Ui.CheckBox(
       {
           Content: "FontFamily",
           CheckedChanged: checkedFont,
           ParentNode: document.getElementById("check2")
       })
           function checkedFont()
           {
               if (checkBox2.getChecked() == true)
               {
                   textSettings.getFontFamilyComboBox().setEnabled(true)
               }
               else textSettings.getFontFamilyComboBox().setEnabled(false)
           }
       //определяем активность числового редактора для выбора размера шрифта
       var checkBox3 = new PP.Ui.CheckBox(
       {
           Content: "FontSize",
           CheckedChanged: checkedFontSize,
           ParentNode: document.getElementById("check3")
       })
           function checkedFontSize()
           {
               if (checkBox3.getChecked() == true)
               {
                   textSettings.getFontSizeComboBox().setEnabled(true)
               }
               else textSettings.getFontSizeComboBox().setEnabled(false)
           }
       //определяем активность панели инструментов
       var checkBox4 = new PP.Ui.CheckBox(
       {
           Content: "ToolBar",
           CheckedChanged: checkedToolbar,
           ParentNode: document.getElementById("check4")
       })
           function checkedToolbar()
           {
               if (checkBox4.getChecked() == true)
               {
                   textSettings.getToolbar().setEnabled(true)
               }
               else textSettings.getToolbar().setEnabled(false)
           }

После выполнения примера на странице будут размещены флажки «ColorCombo», «FontSize», «ToolBar» и «FontFamily», при установке/снятии которых будут активироваться/деактивироваться соответствующие компоненты.


См. также:


[FontBox](FontBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
