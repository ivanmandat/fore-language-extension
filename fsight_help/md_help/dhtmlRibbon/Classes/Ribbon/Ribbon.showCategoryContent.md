# Ribbon.showCategoryContent

Ribbon.showCategoryContent
-


# Ribbon.showCategoryContent


## Синтаксис


showCategoryContent (value);


## Параметры


value. Параметр, определяющий, отображается ли вкладка в ленте. Если установлено значение true, содержимое отображается, false - не отображается.


## Описание


Метод showCategoryContent раскрывает содержимое вкладок.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [Ribbon](../../Components/Ribbon/Ribbon.htm), содержащего, как минимум, одну вкладку (см. «[Пример создания компонента Ribbon](../../Components/Ribbon/Example_Ribbon.htm)»). Создадим кнопку, при нажатии на которую раскрывается содержимое вкладок, если оно было скрыто.


var button = new PP.Ui.Button({ParentNode: "btn", Content: "Раскрыть"})


button.Click.add(function (sender, args) {


        var isHidden = ribbon.getIsCategoryContentHidden()


        if (isHidden == true)


ribbon.showCategoryContent(true)})


После выполнения примера при нажатии на кнопку раскрывается скрытое содержимое вкладок.


См. также:


[Ribbon](Ribbon.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
