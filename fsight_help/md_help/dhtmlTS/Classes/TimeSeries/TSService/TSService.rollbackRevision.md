# TSService.rollbackRevision

TSService.rollbackRevision
-


# TSService.rollbackRevision


## Синтаксис


rollbackRevision (wbk, metaData, callback);


## Параметры


wbk. Задает значение [рабочей
 книги](../Workbook/Workbook.htm);


metaData. Задает метаданные
 с информацией о ревизиях и каталоге показателей;


callback. Задает обработчик
 окончания выполнения операции.


## Описание


Метод rollbackRevision откатывает
 ревизии.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике
 события открытия документа добавить следующий код:


var rollbackRevisionsButt = new PP.Ui.Button({
	ParentNode: document.body, //родительский узел DOM
	Content: "Откат ревизии", //подпись
	Click: PP.Delegate(onClickCallback)
});
function onClickCallback()
	{
		var rubKey = wbk.getActiveSheet().getRub().meta.obInst.obDesc.k;
		var wbkPB = workbookBox.getPropertyBarView();
		var panels = wbkPB._selfNavItems;
		var revisionsPanel = null;
		var i;
		//Получаем панель ревизий базы данных временных рядов
		for (i = 0; i < panels.length; i++)
			{
				if (panels[i]._GroupName == PP.TS.Ui.PropertyGroups.RubricatorRevisions && panels[i].getTag() == rubKey)
					{
						revisionsPanel = wbkPB._selfNavItems[i];
						break;
					}
			}
		//Получаем выбранный элемент списка ревизий
		var sitem = revisionsPanel._RevisionsListBox.getSelectedItem();
		if (!sitem)
		return;
		var revKey = sitem.getId();
		var metadata =
			{
				"Comment": "Откат",
				"Operation": "Rollback",
				"RevKey": revKey,
				"RubKey": wbk.getActiveSheet().getRub().meta.obInst.obDesc.k
			}
		//Производим откат ревизии
		tsService.rollbackRevision(wbk, metadata, PP.Delegate(onResponse));
		function onResponse(sender, args)
			{
				//Получаем список ревизий в полученном ответе сервера
				var res = JSON.parse(args.ResponseText);
				var revs = res.GetRubMdResult.meta.revisions.its.it;
				//Устанавливаем новый список ревизий в панели ревизий
				revisionsPanel.setRevisions(revs);
			}
	}

После выполнения примера на html-странице будет размещена кнопка с наименованием
 «Откат ревизии». Для выполнения примера необходимо на вкладке панели свойств
 «Данные» раскрыть раскрыть панель с наименованием базы данных временных
 рядов и выбрать одну из доступных ревизий. Затем нужно нажать на кнопку
 «Откат ревизии», в результате чего на панели появится новая ревизия с
 наименованием «RollbackData» и датой ее создания.


См. также:


[TSService](TSService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
