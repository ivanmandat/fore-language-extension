# LoginForm.getMetabaseConfig

LoginForm.getMetabaseConfig
-


# LoginForm.getMetabaseConfig


## Синтаксис


getMetabaseConfig(context: Object, mbCfg: Object);


## Параметры


context. Контекст, в котором
 требуется выполнить данный метод. В настоящий момент не используется;


mbCfg. Объект с параметрами
 конфигурации метабазы. Аналогичен JSON-объекту, возвращаемому методом.


## Описание


Метод getMetabaseConfig возвращает
 параметры конфигурации метабазы.


## Комментарии


Метод возвращает объект, который содержит следующие свойства: Id - идентификатор репозитория,
 Authentication - режим аутентификации,
 ConnectionOdId - моникёр подключения
 к репозиторию, ExportUrl - адрес
 для экспорта данных, PPServiceUrl
 - адрес сервиса, UserCreds - объект
 с аутентификационными данными пользователя, а также событие подключения
 к метабазе Opened и событие генерации
 ошибки при подключении Error.


## Пример


Использование метода приведено в примере для [LoginForm.checkPwdPolicy](LoginForm.checkPwdPolicy.htm).


См. также:


[LoginForm](LoginForm.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
