# ToolBar.Items

ToolBar.Items
-


# ToolBar.Items


## Синтаксис


Items: Array


## Описание


Свойство Items содержит массив
 элементов панели инструментов.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setItems,
 а возвращается с помощью метода getItems.


## Пример


Пример использования свойства приведен в описании события [StateChanged](../ToolBarButton/ToolBarButton.StateChanged.htm).


## Пример JSON


Для выполнения примера подключите библиотеку компонентов PP.js и таблицы
 визуальных стилей PP.css, страница должна содержать объект с идентификатором
 «toolB». Далее приведен javascript-код, при помощи которого создается
 компонент [ToolBar](../../Components/ToolBar/ToolBar.htm) и
 через JSON задается массив элементов панели инструментов:


<script type="text/javascript">
var toolBar = new PP.Ui.ToolBar({
ParentNode: document.getElementById("toolB"),
Top: 0,
Left: 0,
  Items: [
  new PP.Ui.ToolBarButton({
      Parent: toolBar,
      Content: "Добавить",
      ToolTip: "Добавить",
      IsFlat: true//Плоская кнопка
  }),
  new PP.Ui.ToolBarButton({
      Parent: toolBar,
      Content: "Удалить",
      ToolTip: "Удалить",
      IsFlat: true//Выпуклая кнопка
  }),
   new PP.Ui.ToolBarButton({
       Parent: toolBar,
       Content: "Редактировать",
       ToolTip: "Редактировать",
       IsFlat: true//Выпуклая кнопка
  })
]
});
</script>
См. также:


[ToolBar](ToolBar.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
