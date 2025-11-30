# TSService.compressRevision

TSService.compressRevision
-


# TSService.compressRevision


## Синтаксис


compressRevision (wbk, metaData, callback);


## Параметры


wbk. Задает значение [рабочей книги](../Workbook/Workbook.htm);


metaData. Задает метаданные
 с информацией о ревизиях и каталоге показателей;


callback. Задает обработчик
 окончания выполнения операции.


## Описание


Метод compressRevision сжимает
 ревизии.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике
 события открытия документа добавить следующий код:


	var compressRevisionButt = new PP.Ui.Button({
	ParentNode: document.body, //родительский узел DOM
	Content: "Сжать ревизию", //подпись
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
	//Получаем ключ выбранной ревизии
	var revKey = sitem.getId();
	if (!revisionsPanel.getRubKey())
		throw PP.ArgumentException(revisionsPanel);

	//Создаем объект, содержащий данные о ревизии, которая будет сжата
	var	metadata =  {
		RubKey: revisionsPanel.getRubKey(),
		Operation: PP.TS.Ui.WbkRevisionOperation.Compress,
		RevKey: revKey,
		SaveLabels: false,
		OldestRevKey: revisionsPanel._OldestRevision.k.toString()
		}
	//Сжимаем ревизии
	tsService.compressRevision(wbk, metadata, PP.Delegate(onResponse));

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
 «Сжать ревизию». Необходимо на вкладке панели свойств «Данные» раскрыть
 панель с наименованием, соответствующим имени базы данных временных рядов.
 Затем в списке ревизий необходимо выбрать одну из доступных и нажать на
 кнопку «Сжать ревизию». После этого ревизии будут сжаты и все метки кроме
 выбранной удалятся. Если панель ревизий пуста, необходимо добавить ревизии,
 нажав на кнопку «Новая метка».


См. также:


[TSService](TSService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
