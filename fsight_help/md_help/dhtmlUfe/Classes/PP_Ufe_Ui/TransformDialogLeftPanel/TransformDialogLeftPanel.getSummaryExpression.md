# TransformDialogLeftPanel.getSummaryExpression

TransformDialogLeftPanel.getSummaryExpression
-


# TransformDialogLeftPanel.getSummaryExpression


## Синтаксис


getSummaryExpression(isStart: Boolean);


## Параметры


isStart. Признак первого получения
 выражения. Если для параметра установлено значение true,
 то будет получено выражение, которое было загружено при запуске окна для редактирования формулы элемента измерения.


## Описание


Метод getSummaryExpression возвращает
 выражение, которое вставляется в редактор выражений компонента [TransformDialog](../../../Components/TransformDialog/TransformDialog.htm).


## Комментарии


Возвращаемое значение - объект, который имеет следующие поля:


- AllNoLagSelection. Признак, указывающий на задержанную загрузку выражения.
 Если для значения поля установлено значение true,
 то выражение было загружено с задержкой.


 - Expr. Объект, в котором хранится информация о выражении.


## Пример


Пример использования свойства приведен в описании метода [TransformDialogLeftPanel.getOpenedDataSources](TransformDialogLeftPanel.getOpenedDataSources.htm).


См. также:


[TransformDialogLeftPanel](TransformDialogLeftPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
