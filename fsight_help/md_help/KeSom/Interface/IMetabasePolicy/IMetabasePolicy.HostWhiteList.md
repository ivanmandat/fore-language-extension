# IMetabasePolicy.HostWhiteList

IMetabasePolicy.HostWhiteList
-


# IMetabasePolicy.HostWhiteList


## Синтаксис


HostWhiteList: [IStringList](ModCollections.chm::/Interface/IStringList/IStringList.htm);


## Описание


Свойство HostWhiteList возвращает
 список адресов, к которым будет разрешёно обращение при формировании запроса
 к REST-сервису.


## Комментарии


Список адресов влияет на работу REST-источников в [задачах
 ETL](UiETL.chm::/Web/03_ETLObjects/02_Inputs/Inputs_REST.htm) и [мастере
 импорта](UiNavObj.chm::/Data_import_wizard/Select_and_configure_the_data_source.htm#rest). Если в указываемом URL-адресе REST-сервиса
 отсутствует подстрока, добавленная в список HostWhiteList,
 то будет генерироваться исключительная ситуация о недоступности обращения
 по указанному адресу. В список HostWhiteList
 могут быть добавлены IP-адреса, полные или частичные наименования
 REST-сервисов, при необходимости через двоеточие может быть указан порт.


По умолчанию список HostWhiteList
 пуст, при этом имеется возможность обращаться к любым источникам.


## Пример


Добавьте ссылки на системную сборки: Collections, Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    MbSec: IMetabaseSecurity;

	    Policy: IMetabasePolicy;

	    WhiteList: IStringList;

	    Lic: Object;

	Begin

	    Mb := MetabaseClass.Active;

	    // Получение лицензии для возможности работы с менеджером безопасности

	    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

	    // Менеджер безопасности

	    MbSec := Mb.Security;

	    Policy := MbSec.Policy;

	    // Настройки общей политики безопасности

	    WhiteList := Policy.HostWhiteList;

	    WhiteList.Clear;

	    WhiteList.Add("test.server.com:443");

	    // Применение изменений

	    MbSec.Apply;

	    // Освобождение лицензии

	    Lic := Null;

	End Sub UserProc;


При выполнении примера будет изменён список адресов, по которым будет
 разрешено обращение к REST-сервисам. Имеющийся список будет очищен и в
 список будет добавлен только один сервер, адрес которого должен будет
 присутствовать в полном адресе REST-сервиса с данными.


См. также:


[IMetabasePolicy](IMetabasePolicy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
