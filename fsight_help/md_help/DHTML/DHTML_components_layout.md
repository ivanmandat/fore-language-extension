# Размещение DHTML-компонентов

Размещение DHTML-компонентов
-


# Размещение DHTML-компонентов


## Размещение базового компонента


Для размещения базового компонента:


	- Добавьте html-страницу в [созданном
	 веб-приложении](Web_application_creation.htm).


Примечание.
 Базовые компоненты можно размещать и вне [веб-приложения](Web_application_creation.htm).
 Для их размещения потребуется только html-страница и необходимые файлы
 скриптов и стилей (см. п.2).


	- Добавьте ссылки на файлы PP.js и PP.css (при работе с браузером
	 Internet Explorer - PP_IE7.js и PP_IE7.css) и на файл с ресурсами
	 (например, PP.resources.ru.js):


Примечание.
 При необходимости может потребоваться подключение других js- и css-файлов.
 Информация об этом представлена в описании отдельного [компонента](DHTML_components.htm).


<head>
    <link href="Build/PP.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="Build/PP.js"></script>
    <script src="Resources/PP.resources.ru.js" type="text/javascript"></script>
</head>

Примечание.
 Ссылку на модуль с ресурсами следует добавлять, если в компоненте содержатся
 поля (например, заголовки элементов управления), которые требуют локализации.
 Подробнее см. в описании [компонентов](DHTML_components.htm).


	- В тег <body> добавьте тег <script>, с заданным атрибутом
	 type. Внутри тега <script> поместите скрипт для создания компонента
	 (см. в описании [DHTML-компонентов](DHTML_components.htm)),
	 например:


<script type="text/javascript">
    var btn = new PP.Ui.Button({
        ParentNode: document.getElementById("btn1"),
        Content: "Открыть"
    })
</script>


	- В тег <body> добавьте элемент DIV с идентификатором, указанным
	 в свойстве ParentNode создаваемого
	 компонента или в параметре метода [Control.addToNode](dhtmlUi.chm::/classes/control/control.addtonode.htm),
	 то есть определите фрагмент страницы, в который будет помещаться компонент:


<div id="btn1">
</div>


	- Откройте созданную страницу в браузере.


После выполнения действий компонент будет размещен на html-странице.


## Размещение высокоуровневого компонента


Высокоуровневый компонент – это визуальный компонент, который для отображения
 какой-либо информации использует данные с сервиса. Каждый такой компонент
 может использовать для отображения данных низкоуровневые компоненты –
 TabSheet, TreeList, ComboBox и т.д.


Для размещения высокоуровневого компонента:


	- Добавьте html-страницу в [созданном
	 веб-приложении](Web_application_creation.htm).


	- Добавьте ссылки на js-файлы и на файлы с ресурсами (подробно
	 см. в описании отдельного [компонента](DHTML_components.htm)).


	- В теге <script> добавьте код
	 для динамического подключения стилей (список необходимых файлов со
	 стилями см. в описании отдельного [компонента](DHTML_components.htm)):


<script type="text/javascript">
    var styles = ["Build/PP.css",
        "Build/PP.App.css",
        "Build/PP.Express.css",
        "Build/PP.Metabase.css"];
    if (PP.IsIE)
    {
        PP.scriptManager.loadStyles([styles[0]]);
        styles.shift();
    }
    PP.scriptManager.loadStyles(styles);
</script>


	- В тег <body> добавьте тег <script>, с заданным атрибутом
	 type. Внутри тега <script> поместите скрипт для создания компонента,
	 а также скрипт для подключения к репозиторию (см. пример на странице
	 «[Пример
	 размещения компонента ReportBox](dhtmlReport.chm::/components/regularreport/reportbox/reportbox_example.htm)»).


	- Выполните шаги 4 и 5 в разделе «[Размещение
	 базовых компонентов](DHTML_components_layout.htm#basic_components)».


После выполнения действий компонент будет размещен на html-странице.


## Общие настройки страницы для размещения компонентов


Для правильной работы компонентов продукта «Форсайт. Аналитическая платформа»
 в Internet Explorer и других браузерах страница должна содержать следующее
 описание типа документа:


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

Также на странице должен быть добавлен тег:


<meta http-equiv="X-UA-Compatible" content="IE=edge" charset="utf-8"/>

Компоненты продукта «Форсайт. Аналитическая платформа»
 не поддерживают режимы совместимости Internet Explorer.


Для синхронизации с ресурсами продукта «Форсайт. Аналитическая платформа»
 необходимо указать кодировку «utf-8».


См. также:


[DHTML-компоненты](DHTML_components.htm)
 | [Создание веб-приложения](Web_application_creation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
