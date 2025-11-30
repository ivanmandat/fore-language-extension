# StatTabSheet.setSource

StatTabSheet.setSource
-


# StatTabSheet.setSource


## Синтаксис


setSource (value);


## Параметры


value. Источник
 данных, экземпляра класса [PP.TS.StatTabSheet](StatTabSheet.htm).


## Описание


Метод setSource устанавливает
 источник данных для электронной таблицы.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике
 события открытия документа добавить следующий код:


	//Разворачиваем панель со вкладками для отображения статистик
	workbookBox.getDataView()._TabStatPanel.expand();

	var setSourceButt = new PP.Ui.Button({
		ParentNode: document.body, //Родительский узел DOM
		Content: "Убрать источник", //Текст
		Click: PP.Delegate(onClickSetSource)
		});

	function onClickSetSource()
	{
		//Получаем табшит "Уравнения" в панели статистики рабочей книги
		var statTabSheet = workbookBox.getDataView()._TabStatPanel._CoeffPanel;
		//Устанавливаем новый источник данных для табшита "Уравнения" в панели статистики рабочей книги
		if (statTabSheet._Source)
		{
			statTabSheet.setSource(null);
			setSourceButt.setContent("Установить источник");
		}
		else
		{
			statTabSheet.setSource(wbk.getStatCoeffTabSheetSource());
			setSourceButt.setContent("Убрать источник");
		}
		//Обновляем табшит "Уравнения" в панели статистики рабочей книги
		statTabSheet.refresh();
	}

После выполнения примера на html-странице будет размещен компонент [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm).
 При нажатии на кнопку «Убрать источник», во вкладке «Уравнения» в панели
 статистики рабочей книги будет установлен новый источник данных.


См. также:


[StatTabSheet](StatTabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
