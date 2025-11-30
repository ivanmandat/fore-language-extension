# Конструктор NewRevisionDlg

Конструктор NewRevisionDlg
-


# Конструктор NewRevisionDlg


## Синтаксис


PP.TS.Ui.NewRevisionDlg (settings);


## Параметры


settings. JSON-объект
 со значениями свойств компонента.


## Описание


Конструктор NewRevisionDlg создает
 экземпляр класса [NewRevisionDlg](NewRevisionDlg.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике
 события открытия документа добавить следующий код:


var openDialogButt = new PP.Ui.Button({
	ParentNode: document.body, //Родительский узел DOM
	Content: "Open Dialog", //Подпись
	Click: PP.Delegate(onClickOpenDialog)
});
var newRevisionDlg;
function onClickOpenDialog() {
	// Создаем экземпляр класса диалога добавления метки
	newRevisionDlg = new PP.TS.Ui.NewRevisionDlg({
		ResourceKey: "NewRevisionDlg", //ключ ресурса
		OkButtonClicked: PP.Delegate(onNewRevisionDialogOkButtonClick, this)
	});
	// Отображаем диалог
	newRevisionDlg.show();
	}
function onNewRevisionDialogOkButtonClick() {
	//Выводим имя и комментарий метки (ревизии)
	alert('name: ' + newRevisionDlg.getName() + '\n' + "description: " + newRevisionDlg.getDescription());
}

После выполнения примера на html-странице будет размещен компонент [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 и кнопка с наименованием «Open Dialog», при нажатии на которую появится
 диалог «Добавить метку», имеющий следующий вид:


![](ex_1.PNG)


См. также:


[NewRevisionDlg](NewRevisionDlg.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
