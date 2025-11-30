# TransformDialogLeftPanel.ExpressionCreated

TransformDialogLeftPanel.ExpressionCreated
-


# TransformDialogLeftPanel.ExpressionCreated


## Синтаксис


ExpressionCreated: function (sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии. Аргументы: Expression - информация о выбранном выражении; Poisition - позиция, в которую помещается выражение.


## Описание


Событие ExpressionCreated наступает
 после выбора элемента измерения и нажатия на кнопку «Вставить» на левой
 панели компонента [TransformDialog](../../../Components/TransformDialog/TransformDialog.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [TransformDialog](../../../Components/TransformDialog/TransformDialog.htm)
 с наименованием «dialog» (см. «[Пример
 создания компонента TransformDialog](../../../Components/TransformDialog/Example_TransformDialog.htm)»). Добавим обработчик события
 ExpressionCreated к левой панели окна:


// Добавляем обработчик события ExpressionCreated к левой панели окна
dialog._LeftPanel.ExpressionCreated.add(function(sender, args) {
    console.log("Выражение добавлено в редактор выражений");
});
Выберем элемент измерения и добавим его выражение в редактор выражений.
 В результате в консоль было выведено сообщение о добавлении выражения:


Выражение добавлено в редактор выражений


См. также:


[TransformDialogLeftPanel](TransformDialogLeftPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
