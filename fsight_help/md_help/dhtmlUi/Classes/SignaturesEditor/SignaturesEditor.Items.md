# SignaturesEditor.Items

SignaturesEditor.Items
-


# SignaturesEditor.Items


## Синтаксис


Items: Array;


## Описание


Свойство Items определяет массив
 пунктов меню.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setItems,
 а возвращается с помощью метода getItems.


## Пример


Для выполнения примера необходимо наличие в теге <head> html-страницы
 ссылок на файл сценария PP.js и файл стилей PP.css, а сам пример нужно
 разместить в теге <script>. В тег <body> добавим элемент <div>
 с классом «Panel». Создадим элемент для редактирования маски подписей:


// Создадим контейнер для панели
var container = new PP.Ui.GridPanel({
  ParentNode: document.getElementById("Panel") }
);
// Создадим элемент редактирования маски подписей и добавим его в контейнер
SignEditor = new PP.Ui.SignaturesEditor ({
	Currencies: [{
	Name: PP.resourceManager.getString('Content', 'visMasterTooltipsCurrencyR'),
	Postfix: ' р.'
	},{
	Name: PP.resourceManager.getString('Content', 'visMasterTooltipsCurrencyE'),
	Prefix: '€'
	},{
	Name: PP.resourceManager.getString('Content', 'visMasterTooltipsCurrencyD'),
	Prefix: '$'
	}],
	FormatDelimeter: "=",
	DefaultFormatType: PP.Ui.SignEditorFormatType.Number,
	DefaultDecimalPlaces: 0,
	DefaultCurrency: 0,
	DefaultDelimeter: PP.Ui.SignEditorThousandsDelimeterType.Both,
	Formats: [PP.Ui.SignEditorFormatType.Number, PP.Ui.SignEditorFormatType.Percentage],
	VariablePostfix: "}",
	VariablePrefix: "{%"
});
container.add(SignEditor);
// Создадим массив подстановок
var templates = [{
	Type: PP.Ui.SignEditorItemType.Caption,
	Name: PP.resourceManager.getString('Content', 'visMasterTooltipsTemplates')
	},{
	Type: PP.Ui.SignEditorItemType.Variable,
	Name: PP.resourceManager.getString('Content', 'visMasterTooltipsColorName'),
	Value: 'ColorTitle'
	}, {
	Type: PP.Ui.SignEditorItemType.NumberVariable,
	Name: PP.resourceManager.getString('Content', 'visMasterTooltipsColorValue'),
	Value: 'ColorValue'
	},{
	Type: PP.Ui.SignEditorItemType.Variable,
	Name: PP.resourceManager.getString('Content', 'visMasterTooltipsItemName'),
	Value: 'Name'
}]
// Зададим дополнительные настройки
SignEditor.setDecimalPlaces(3);
SignEditor.setDelimeter(PP.Ui.SignEditorThousandsDelimeterType.With);
// Добавим подстановки
SignEditor.setItems(templates);
// Установим текущее значение поля редактирования
SignEditor.setFormula("Метрика цвет: {%ColorTitle} - {%ColorValue}")
// Добавим события
SignEditor.TextChanged.add(function(sender, args){
console.log("Событие TextChanged");
console.log(args);
});
SignEditor.AfterTimeout.add(function(sender, args){
console.log("Событие AfterTimeout");
});
// Получим элементы панели
console.log(SignEditor.getMenuButton());
console.log(SignEditor.getTextArea());
console.log(SignEditor.getMenu());
В результате на страницу будет добавлена панель редактирования маски
 подписей.


См. также:


[SignaturesEditor](SignaturesEditor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
