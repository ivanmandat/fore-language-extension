# Создание пользовательской темы конструктора бизнес-приложений

Создание пользовательской темы конструктора бизнес-приложений
-


# Создание пользовательской темы конструктора бизнес-приложений


В конструкторе бизнес-приложений используется тема «dba10» по умолчанию.
 Набор тем содержится в папке:


	- /opt/foresight/fp10.x-dba/themes
	 в ОС Linux;


	- C:\Program Files (x86)\Foresight\DBA_10.x\themes в ОС Windows.


Тема состоит из следующих файлов:


	- icons. Папка, в которой
	 содержится набор используемых пиктограмм в формате *.svg;


	- theme.json. Файл конфигурации
	 темы.


Для создания пользовательской темы веб-приложения:


	- Скопируйте существующую тему «dba10» и вставьте её в текущую
	 папку с новым наименованием. Например, «custom_theme»:


		- /opt/foresight/fp10.x-dba/themes/custom_theme
		 в ОС Linux;


		- C:\Program Files (x86)\Foresight\DBA_10.x\themes\custom_theme
		 в ОС Windows.


При необходимости набор тем может содержаться
 в любой папке. Путь до папки с темами конструктора бизнес-приложений задаётся
 в файле [config.json](../Configuration_Designer_of_Business_Applications.htm#config_json)
 в поле [customThemesPath](../Configuration_Designer_of_Business_Applications.htm#custom_themes_path).


	- Создайте файл custom.css с пользовательскими настройками оформления
	 в папке «custom_theme». При формировании настроек учитывайте [стандартные правила CSS](https://developer.mozilla.org/ru/docs/Web/CSS/Reference). Для определения конкретного
	 элемента интерфейса бизнес-приложения используйте инструменты разработчика
	 браузера.


Для повышения приоритета конкретного стиля
 указывайте «!important». Например:


color: rgb(240, 240, 242) !important;


	- Откройте на редактирование файл конфигурации theme.json:


{

    "key": "custom_theme",

    "name": "Пользовательская тема",

    "platform": {

        "NavigatorBox":
 {

            "overrideStyles":
 true

        }

    },

    "customization": {

        "customCss":
 true

    }

}


Измените значения полей:


		- key. Ключ темы.
		 Задаётся в соответствии с наименованием темы, заданным в шаге
		 1;


		- name. Наименование
		 темы. По умолчанию «КБП 10»;


		- customization. Признак
		 использования файла custom.css с пользовательскими настройками
		 оформления. Допустимые значения дочернего поля customCss:


			- true. Используется
			 оформление, заданное в файле custom.css;


			- false. Используется
			 оформление по умолчанию.


	- Измените пиктограммы, содержащиеся в папке icons.


	- Укажите ключ темы в файле [config.json](../Configuration_Designer_of_Business_Applications.htm#config_json)
	 в поле [themes](../Configuration_Designer_of_Business_Applications.htm#themes):


"themes": ["custom_theme",
 "dba10"]


Первая тема используется по умолчанию.


	- [Перезапустите
	 серверную часть конструктора бизнес-приложений](../Restart_Backend_Designer_of_Business_Applications.htm).


	- Очистите кеш браузера при необходимости.


После выполнения действий при [открытии
 бизнес-приложения](../Open_Business_Application.htm) будет использоваться пользовательская тема.


См. также:


[Вопросы
 и ответы](../../UiWebSetup/04_FAQ/Setup_FAQ.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
