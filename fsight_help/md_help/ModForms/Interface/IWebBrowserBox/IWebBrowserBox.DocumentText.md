# IWebBrowserBox.DocumentText

IWebBrowserBox.DocumentText
-


# IWebBrowserBox.DocumentText


## Синтаксис


DocumentText: String;


## Описание


Свойство DocumentText определяет
 HTML код страницы, загруженной в компоненте [WebBrowserBox](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/WebBrowserBox.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1 и компонента WebBrowserBox с наименованием
 WebBrowserBox1.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Begin

    WebBrowserBox1.DocumentText :=

        "<! DOCTYPE HTML PUBLIC ""-//IETF//DTD HTML//EN"" >" +

        "<HTML>" +

        "<HEAD>" +

        "<meta name = ""GENERATOR"" content = ""Microsoft® HTML Help Workshop 4.1"" >" +

        "<Title> Test text </Title>" +

        "</HEAD>" +

        "<BODY>" +

        "<H1>TEST</H1>" +

        "</BODY>" +

        "</HTML>"

End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку в компонент WebBrowserBox1
 будет загружена тестовая страница.


См. также:


[IWebBrowserBox](IWebBrowserBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
