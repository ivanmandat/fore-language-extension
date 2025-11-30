# Dialog.OkButtonClicked

Dialog.OkButtonClicked
-


# Dialog.OkButtonClicked


## Синтаксис


OkButtonClicked: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии. Допустимые аргументы: DialogResult - настройки, установленные в диалоге пользователем, IsCancelClose - признак того, что после нажатия на кнопку «OK» диалог не закроется (при равенстве значению true).


## Описание


Событие OkButtonClicked наступает при нажатии на кнопку «OK».


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [FontDialog](../../Components/FontDialog/FontDialog.htm) с наименованием «fontdialog» (см. «[Пример создания компонента FontDialog](../../Components/FontDialog/FontDialog_example.htm)»). Добавим обработчик события OkButtonClicked:


fontdialog.OkButtonClicked.add(function (sender, args) {
    // Получим настройки, установленные в диалоге пользователем
    var font = sender.getDialogResult();
    console.log("Семейство шрифтов: " + font.getFontFamily());
    console.log("Размер шрифта: " + font.getSize());
    // После нажатия на кнопку «OK» диалог закрывать не будем
    args.IsCancelClose = true;
});

После выполнения примера при нажатии на кнопку «OK» диалога в консоли браузера будут выведены наименование и размер выбранного пользователем шрифта:


Семейство шрифтов: Tahoma

Размер шрифта: 12


При этом окно диалога закрыто не будет.


См. также:


[Dialog](Dialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
