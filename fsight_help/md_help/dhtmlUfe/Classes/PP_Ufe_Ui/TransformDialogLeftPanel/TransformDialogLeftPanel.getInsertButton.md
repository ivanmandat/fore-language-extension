# TransformDialogLeftPanel.getInsertButton

TransformDialogLeftPanel.getInsertButton
-


# TransformDialogLeftPanel.getInsertButton


## Синтаксис


getInsertButton();


## Описание


Метод getInsertButton возвращает
 кнопку левой панели компонента [TransformDialog](../../../Components/TransformDialog/TransformDialog.htm),
 предназначенную для вставки формулы элемента измерения в редактор выражений
 компонента [TransformDialog](../../../Components/TransformDialog/TransformDialog.htm).


## Комментарии


Возвращаемое значение - экземпляр класса PP.Ui.[Button](dhtmlUi.chm::/Classes/Button/Button.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [TransformDialog](../../../Components/TransformDialog/TransformDialog.htm)
 с наименованием «dialog» (см. «[Пример
 создания компонента TransformDialog](../../../Components/TransformDialog/Example_TransformDialog.htm)»). Получим заголовок кнопки левой
 панели окна:


// Получаем заголовок кнопки левой панели
console.log("Заголовок кнопки левой панели: " + dialog._LeftPanel.getInsertButton().getContent());
В результате в консоль был выведен заголовок кнопки левой панели:


Заголовок кнопки левой панели: Вставить


См. также:


[TransformDialogLeftPanel](TransformDialogLeftPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
