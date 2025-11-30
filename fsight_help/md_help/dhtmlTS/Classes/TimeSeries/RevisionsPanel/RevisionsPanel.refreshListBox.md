# RevisionsPanel.refreshListBox

RevisionsPanel.refreshListBox
-


# RevisionsPanel.refreshListBox


## Синтаксис


refreshListBox (fireSelectionEvent);


## Параметры


fireSelectionEvent. Определяет, генерировать ли событие, которое наступает при выделении элемента списка ревизий. Если true - генерировать, false - нет.


## Описание


Метод refreshListBox обновляет список в соответствии с коллекцией ревизий this._Revisions.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


var revisionsButt = new PP.Ui.Button({
	ParentNode: document.body, //Родительский узел DOM
	Content: "Изменить сортировку ", //Подпись
	Click: PP.Delegate(onClickRevisions)
	});
var dialogShown = false;
function onClickRevisions()
	{
//Получаем панель ревизии для базы данных
var rubKey = 112;
var wbkPB = workbookBox.getPropertyBarView();
var panels = wbkPB._selfNavItems;
var revisionsPanel = null;
var i;
for (i = 0; i < panels.length; i++)
	{
		if (panels[i]._GroupName == PP.TS.Ui.PropertyGroups.RubricatorRevisions && panels[i].getTag() == rubKey)
			{
				revisionsPanel = wbkPB._selfNavItems[i];
				break;
			}
	}
var orderType = revisionsPanel._OrderType;
//Устанавливаем сортировку ревизий
switch (orderType)
	{
		case PP.TS.Ui.WbkRevisionsOrder.ByName:
			revisionsPanel._sortRevision(PP.TS.Ui.WbkRevisionsOrder.ByDate);
			break;
		case PP.TS.Ui.WbkRevisionsOrder.ByDate:
			revisionsPanel._sortRevision(PP.TS.Ui.WbkRevisionsOrder.ByName)
			break;
	}
//Обновляет список в соответствии с коллекцией ревизий
revisionsPanel.refreshListBox();
//Получаем ключ каталога показателей, ревизии которого отображаются в компоненте
var rub = revisionsPanel.getRubKey();
//Получаем массив ревизий, которые отображаются в компоненте
var revs = revisionsPanel.getRevisions();
revs = revs.length;
	if (!dialogShown)
		{
			alert("Ключ каталога показателей:      " + rub + '\n' +
			"Количество отображаемых ревизий:" + revs);
			dialogShown = true;
		}
	}

После выполнения примера на html-странице будет размещен компонент [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) и кнопка с наименованием «Изменить сортировку». Для выполнения примера также необходимо на [панели свойств рабочей книги](../WbkPropertyBarView/WbkPropertyBarView.htm) выбрать вкладку «Данные», раскрыть панель «Базовый», затем нажать на кнопку. После чего изменится сортировка ревизии и выведется сообщение с количеством отображаемых ревизий и ключом каталога показателей.


См. также:


[RevisionsPanel](RevisionsPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
