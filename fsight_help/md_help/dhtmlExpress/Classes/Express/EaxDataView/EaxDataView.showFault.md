# EaxDataView.showFault

EaxDataView.showFault
-


# EaxDataView.showFault


## Синтаксис


showFault(message);


## Параметры


*message.* Сообщение об ошибке, выводимое в окне.


## Описание


Метод showFault отображает окно с сообщением об ошибке.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента EaxDataBox с наименованием «EaxDataBox» (см. «[Пример создания компонента EaxDataBox](../../../Components/Express/EaxDataBox/EaxDataBox_Example.htm)»). Далее отобразим окно с сообщением об ошибке в случае неправильного наименования листа, которая определяется с помощью перечисления PP.Exp.[EaxDocument.SheetNameError](../../../Enums/EaxDocument.SheetNameError.htm):


// Проверяем наименование листа
var sheetCheck = EaxDataBox.getSource().checkSheetName("New sheet");
switch (sheetCheck) {
    case PP.Exp.EaxDocument.SheetNameError.Coincident:
        // Выводим сообщение об ошибке
        EaxDataBox.showFault(PP.resourceManager.getString("Content", "EaxSheetNameCoincident"));
        sender.setCaption(PP.String.escapeHTML("Sheet 1"));
        break;
    case PP.Exp.EaxDocument.SheetNameError.Empty:
        // Выводим сообщение об ошибке
        EaxDataBox.showFault(PP.resourceManager.getString("Content", "EaxSheetNameEmpty"));
        sender.setCaption(PP.String.escapeHTML("Sheet 1"));
        break;
    }
}

В результате выполнения данного примера в случае неправильного наименования листа будет выведено окно с сообщением об ошибке.


См. также:


[EaxDataView](EaxDataView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
