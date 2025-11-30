# ComboBox.clearSelection

ComboBox.clearSelection
-


# ComboBox.clearSelection


## Синтаксис


clearSelection ();


## Описание


Метод clearSelection удаляет
 отметку с элементов компонента [ComboBox](../../Components/ComboBox/ComboBox.htm).


## Пример


Для выполнения примера в теге <head> html-страницы добавим ссылки
 на файлы PP.js и PP.css. Создадим компонент ComboBox и кнопку, при нажатии
 на которую будет снята отметка со всех его элементов:


<body>
  <div id="tbCont"></div>
  <div id="btnCont"></div>
<script type="text/javascript">
var comboBox = new PP.Ui.ComboBox({
    ParentNode: "tbCont",
    ListBox: {
     Items: [
     { Content: "Да" },
     { Content: "Нет" }]
    },
    Width: 140
   });
   comboBox.setSelectedIndex(0);
   var btnAddProvider = new PP.Ui.Button({
    ParentNode: "btnCont",
    Content: "Снять отметку",
    Click: function () { comboBox.clearSelection();}
   });
</script>
</body>
После выполнения примера на странице будет размещен компонент ComboBox
 и кнопка, при нажатии на которую будет снята отметка с элементов компонента
 ComboBox


См. также:


[ComboBox](ComboBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
