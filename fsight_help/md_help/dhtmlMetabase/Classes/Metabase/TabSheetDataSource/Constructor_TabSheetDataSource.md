# Конструктор TabSheetDataSource

Конструктор TabSheetDataSource
-


# Конструктор TabSheetDataSource


## Синтаксис


PP.TS.Ui.TabSheetDataSource (settings);


## Параметры


settings. JSON-объект
 со значениями свойств компонента.


## Описание


Конструктор TabSheetDataSource
 создает экземпляр класса [TabSheetDataSource](TabSheetDataSource.htm).


## Пример


Для выполнения примера в теге HEAD html-страницы укажите ссылки на следующие
 js-файлы:


	- PP.js;


	- PP.Metabase.js;


	- PP.TabSheet.js


	- PP.Express.js;


	- PP.TS.js.


А также на следующие css-файлы:


	- PP.css;


	- PP.Express.css;


	- PP.TS.css;


	- PP.Metabase.css.


А также предполагается наличие рабочей книги с ключом 5183.


В теге <body> в качестве значения атрибута «onLoad» указываем
 имя функции, которая выполняется после окончания загрузки тела страницы:


<body  onselectstart="return false" class="PPNoSelect" onload="Ready()">
	<div id='example'></div>
</body>

В конце документа вставляем код для установки стилей к вершине
 «document.body», которые соответствуют операционной системе клиента:


<script type="text/javascript">
    PP.initOS(document.body);
</script>
В теге SCRIPT добавьте следующий скрипт:


<script type="text/javascript">
    PP.initOS(document.body);
</script>
После выполнения примера на html-странице будет размещена панель.


См. также:


[TabSheetDataSource](TabSheetDataSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
