# Пример создания компонента DictionaryBox

Пример создания компонента DictionaryBox
-


# Пример создания компонента DictionaryBox


Перед выполнением примера ознакомьтесь с [рекомендациями](dhtml.chm::/specification/JavaScript_main.htm)
 к написанию кода.


Для создания компонента RdsBox:


	- Создайте табличные справочники НСИ в настольном приложении:


[![](../../../Opened.gif)![](../../../Closed.gif)Табличный
 справочник НСИ «Time units»](javascript:TextPopup(this))


	Свойства объекта:


			- Наименование: Time units;


			- Идентификатор: TIME_UNITS;


			- Ключ: 8093.


	Примечание.
	 Ключ автоматически формируется при создании объекта и недоступен для
	 редактирования. Данный ключ используется для открытия табличного справочника
	 НСИ в коде примера.


	Помимо предопределённых атрибутов в справочнике
	 добавьте [пользовательские
	 атрибуты](UiNavObj.chm::/reference_book/Master_RDS_reference_book/Attributes/Attribute.htm):


			 Идентификатор


			 Наименование
			 Тип данных
			 Множественные значения
			 Скрыт
			 Комментарии


			 UNIT_VALUE


			 Значение
			 Вещественный
			 Нет
			 Нет
			 Нет


			 DESCRIPTION


			 Описание
			 Строковый
			 Нет
			 Нет
			 Нет


			 UNITS_SYSTEM


			 Система мер
			 Целый
			 Да
			 Нет
			 [Связан](UiNavObj.chm::/reference_book/Master_RDS_reference_book/Link.htm)
			 со справочником «System of units» по атрибуту «Наименование»


			 UNITS_SYSTEM_DESCRIPTION


			 Описание системы мер
			 Строковый
			 Нет
			 Да
			 Заимствованный атрибут. Связан с атрибутом «Описание» из
			 справочника «System of untits»


	В [базовых настройках
	 справочника](UiNavObj.chm::/reference_book/Master_RDS_reference_book/base_settings.htm) установите флажки:


			- Элементы могут изменяться во времени;


			- Элементы имеют справочник на другие языки;


			- Элементы имею дискреционные права доступа;


			- Элементы имеют признак скрытости.


[![](../../../Opened.gif)![](../../../Closed.gif)Табличный
 справочник НСИ «System of units»](javascript:TextPopup(this))


	Свойства объекта:


			- Наименование: System of units;


			- Идентификатор: UNITS_SYSTEMS.


	Помимо предопределённых атрибутов в справочнике
	 добавьте [пользовательский
	 атрибут](UiNavObj.chm::/reference_book/Master_RDS_reference_book/Attributes/Attribute.htm):


			 Идентификатор


			 Наименование
			 Тип данных
			 Множественные значения
			 Скрыт
			 Комментарии


			 DESCRIPTION


			 Описание
			 Строковый
			 Нет
			 Нет
			 Нет


	- Используйте HTML-код:


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>RdsBox</title>
    <link href="../build/PP.css" rel="stylesheet" type="text/css" />
    <link href="../build/PP.Metabase.css" rel="stylesheet" type="text/css" />
    <link href="../build/PP.Dictionaries.css" rel="stylesheet" type="text/css" />
    <script src="../build/PP.js" type="text/javascript"></script>
    <script src="../build/PP.Metabase.js" type="text/javascript"></script>
    <script src="../build/PP.Dictionaries.js" type="text/javascript"></script>

    <script type="text/javascript">
        var dictionaryKey = 8093; // Ключ табличного справочника НСИ «Time units»
        function Ready() {
            PP.ImagePath = "../build/img/";
            PP.ScriptPath = "../build/";
            PP.CSSPath = "../build/";
            PP.resourceManager.setRootResourcesFolder("../resources/");
            PP.resourceManager.setResourceList(['PP', 'Metabase', 'Dictionaries']);
            PP.setCurrentCulture(PP.Cultures.ru);
            // Создадим соединение с репозиторием
            metabase = new PP.Mb.Metabase({
                // Зададим Url веб-сервиса PP.SOM в формате:
                // <http://<ServerName | IP-address>[:<Port>][/<VirtualCatalog>]/axis2/services/PP.SOM.Som>
                PPServiceUrl: "http://localhost/FPBI_App_v9.x/axis2/services/PP.SOM.Som",
                // Укажем идентификатор репозитория и учётные данные пользователя
                Id: "REPOSITORY",
                UserCreds: {
                    UserName: "user",
                    Password: "password"
                }
            });
            // Откроем соединение с репозиторием
            metabase.Error.add(function (sender, args) {
                alert(args.ResponseText);
            });
            metabase.Opened.add(function (sender, args) {
                openDictionaryBox();
            });
            metabase.open();
        }
        // Откроем табличный справочник НСИ с заданным ключом
        function openDictionaryBox() {
            service = new PP.Dictionaries.RdsService({
                Metabase: metabase,
                RdsOpened: function (sender, args) {
                    console.log("Ключ открытого справочника: %s", args.Dictionary.getKey());
                    console.log("Идентификатор открытого справочника: %s", args.Dictionary.getId());
                },
                RdsClosed: function (sender, args) {
                    console.log("Наименование закрытого справочника: %s", args.Dictionary.getName());
                }
            });
            source = service.openRds(dictionaryKey, null, true);
            rdsBox = new PP.Dictionaries.Ui.RdsBox({
                Source: source,
                ParentNode: "rdsBox",
                ImagePath: PP.ImagePath,
                Width: 800,
                Height: 400,
                Open: function (sender, args) {
                    source = service.openRds(dictionaryKey, null, true);
                    rdsBox.setSource(source);
                },
                Close: function (sender, args) {
                    // Уберём справочник из контейнера
                    rdsBox.setSource(null);
                    // Закроем справочник
                    service.closeRds(source, function (sender, args) {
                        console.log("Ключ закрытого справочника: %s",
                        args.Args.Dictionary.getKey())
                    });
                    rdsBox.refreshAll();
                }
            });
        }
    </script>
</head>
<body onload="Ready()">
    <div id="rdsBox" style="border: 1px #C3C3C3 solid; width: 805px"></div>
</body>
</html>

Примечание.
 Для выполнения пользовательских сценариев над контейнером со справочником
 НСИ, в том числе примеров, приведённых на страницах описания свойств,
 методов и событий данного компонента и составляющих его элементов, разместите
 код в функции «Ready» или в консоли браузера.


В результате выполнения примера на html-странице будет размещен компонент
 RdsBox, который отображает табличный справочник НСИ «Time units»:


![](DictionaryBox.png)


Также в процессе выполнения примера:


	- после срабатывания обработчика события [RdsService.RdsOpened](../../../Classes/Rds/RdsService/RdsService.RdsOpened.htm)
	 в консоли браузера будут выведены ключ и идентификатор открытого справочника:


Ключ открытого справочника:
 8093


Идентификатор открытого
 справочника: TIME_UNITS


	- при выполнении команды «Закрыть»
	 в главном меню «Файл» справочник
	 будет удалён из контейнера:


![](DictionaryBox_excludeSource.png)


При этом будут сработаны события [RdsService.RdsClosed](../../../Classes/Rds/RdsService/RdsService.RdsClosed.htm)
 и [DictionaryBox.Close](../../../Classes/Rds/DictionaryBox/DictionaryBox.Close.htm),
 после чего в консоли браузера будут выведены ключ и наименование закрытого
 справочника:


Ключ закрытого справочника:
 8093

Наименование закрытого справочника: Time units


	- при выполнении команды «Открыть»
	 в главном меню «Файл» контейнер
	 будет загружен табличный справочник НСИ с тем же ключом.


См. также:


[DictionaryBox](DictionaryBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
