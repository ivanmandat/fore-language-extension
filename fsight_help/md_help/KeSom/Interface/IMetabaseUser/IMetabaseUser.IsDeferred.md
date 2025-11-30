# IMetabaseUser.IsDeferred

IMetabaseUser.IsDeferred
-


# IMetabaseUser.IsDeferred


## Синтаксис


IsDeferred: Boolean;


## Описание


Свойство IsDeferred возвращает
 признак отложенной загрузки описания пользователя.


## Комментарии


Если свойство возвращает значение True,
 то пользователь имеет признак отложенной загрузки описания. Описание таких
 пользователей не загружается при входе в репозиторий, что позволяет сэкономить
 время на подключение.


Для добавления признака отложенной загрузки пользователям, созданным
 из менеджера безопасности, требуется задать соответствующий флажок в политике
 безопасности - [MetabasePolicy.CreateDeferredSubjects](../IMetabasePolicy/IMetabasePolicy.CreateDeferredSubjects.htm)
 = True. При этом все вновь создаваемые пользователи будут автоматически
 получать признак IsDeferred = True.


Также пользователи с отложенной загрузкой описания создаются при работе
 BI-сервера, если используется авторизация с помощью учетных записей различных
 сервисов: Google, LiveJournal. При этом создаются временные пользователи,
 которые существуют в виде отдельных записей в системной таблице репозитория.
 Физические пользователи СУБД при этом не создаются. Для авторизации под
 такими пользователями должен быть настроен отдельный пользователь репозитория,
 который будет использоваться для имперсонации. Для него на BI-сервере
 должны быть сохранены [учетные
 данные](../IMetabaseLink/IMetabaseLink.Credentials.htm) по умолчанию.


Для получения описания пользователей с отложенной загрузкой используйте
 методы [IMetabaseSecurity.ResolveName](../IMetabaseSecurity/IMetabaseSecurity.ResolveName.htm),
 [IMetabaseSecurity.ResolveSid](../IMetabaseSecurity/IMetabaseSecurity.ResolveSid.htm)
 либо поиск через [IMetabaseSecurity.NewSubjectsSearch](../IMetabaseSecurity/IMetabaseSecurity.NewSubjectsSearch.htm).
 Также метод [IMetabaseSecurity.ActiveUsers](../IMetabaseSecurity/IMetabaseSecurity.ActiveUsers.htm)
 вернёт пользователей СУБД, являющихся пользователями репозитория, для
 которых был установлен признак отложенной загрузки. После первого получения
 описания с помощью указанных методов оно также будет доступно в коллекции
 [IMetabaseSecurity.Users](../IMetabaseSecurity/IMetabaseSecurity.Users.htm).


## Пример


Пример использования приведен в описании метода [IMetabaseSecurity.ActiveUsers](../IMetabaseSecurity/IMetabaseSecurity.ActiveUsers.htm).


См. также:


[IMetabaseUser](IMetabaseUser.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
