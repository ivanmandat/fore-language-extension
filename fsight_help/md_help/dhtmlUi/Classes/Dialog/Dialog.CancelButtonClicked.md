# Dialog.CancelButtonClicked

Dialog.CancelButtonClicked
-


# Dialog.CancelButtonClicked


## Синтаксис


CancelButtonClicked: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.
 Допустимые аргументы: DialogResult - настройки, установленные в диалоге
 пользователем, IsCancelClose - признак того, что после нажатия на кнопку
 «Отмена» диалог не закроется (при равенстве значению true).


## Описание


Событие CancelButtonClicked
 наступает при нажатии на кнопку «Отмена».


## Комментарии


На кнопку «Отмена» ссылается поле CancelButton.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [FontDialog](../../Components/FontDialog/FontDialog.htm) с
 наименованием «fontdialog» (см. «[Пример
 создания компонента FontDialog](../../Components/FontDialog/FontDialog_example.htm)»). Добавим обработчик события CancelButtonClicked:


fontdialog.CancelButtonClicked.add(function (sender, args) {
    // После нажатия на кнопку «Cancel» диалог закрывать не будем
    args.IsCancelClose = true;
    alert("Нажата кнопка «Отмена»");
});
После выполнения примера при нажатии на кнопку «Отмена» диалога будет
 появляться окно с сообщением, что данная кнопка была нажата. При этом
 окно диалога закрыто не будет.


См. также:


[Dialog](Dialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
