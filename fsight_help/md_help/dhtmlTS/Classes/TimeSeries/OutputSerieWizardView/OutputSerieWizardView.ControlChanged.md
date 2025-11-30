# OutputSerieWizardView.ControlChanged

OutputSerieWizardView.ControlChanged
-


# OutputSerieWizardView.ControlChanged


## Синтаксис


ControlChanged(sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие ControlChanged наступает
 после изменения параметра в мастере.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике
 события открытия документа добавить следующий код:


metabase.EndRequest.add(PP.Delegate(function(){
	if(workbookBox.getPropertyBarView().getParametersPanel())
		{
			//Добавляем обработчик событию разворачивания панели параметров, чтобы при наличии мастера выходного ряда
			//добавить ему обработчик события изменения параметра в мастере выходного ряда
			workbookBox.getPropertyBarView().getParametersPanel().Toggled.addOne(PP.Delegate(addHandler));
		}
	}));
	//Обработчик события разворачивания панели параметров
	function addHandler()
		{
			if(workbookBox.getPropertyBarView().getParametersPanel()._OutputSerieWizard)
				{
					//Добавляем обработчик события изменения параметра в мастере выходного ряда
					workbookBox.getPropertyBarView().getParametersPanel()._OutputSerieWizard.ControlChanged.addOne(PP.Delegate(onControlChanged));
				}
		}
	//обработчик события изменения параметра в мастере выходного ряда
	function onControlChanged()
		{
			alert("Произошло событие изменения параметра в мастере выходного ряда");
		}

Для выполнения примера необходимо в таблице выбрать ряд, который имеет
 один из нижеперечисленных типов формулы из перечисления PP.TS.UI.[TsFormulaKind](../../../Enums/TsFormulaKind.htm):


	- Линейная регрессия;


	- Линейная регрессия (оценка методом инструментальных переменных);


	- Нелинейная регрессия;


	- Модель коррекции ошибок.


Также на вкладке панели свойств «Ряд» раскрыть панель «Параметры» и
 выбрать любой из представленных параметров выходного ряда. После чего
 произойдет событие изменения параметра и будет выведено соответствующее
 сообщение.


См. также:


[OutputSerieWizardView](OutputSerieWizardView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
