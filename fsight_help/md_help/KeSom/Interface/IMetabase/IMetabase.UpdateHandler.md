# IMetabase.UpdateHandler

IMetabase.UpdateHandler
-


# IMetabase.UpdateHandler


## Синтаксис


UpdateHandler: String;


## Описание


Свойство UpdateHandler определяет
 глобальный обработчик событий работы с обновлениями.


## Комментарии


В качестве значения свойства указывается модуль/форму/сборку и класс.
 Класс должен быть наследником класса [UpdateCallback](../../Class/UpdateCallback/UpdateCallback.htm)
 и реализовывать его методы. Значение задаётся в следующем формате: <Идентификатор
 модуля/формы/сборки>.<Имя класса>.


## Пример


Для выполнения примера в репозитории предполагается наличие модуля с
 идентификатором MOD_UPDATE. В модуле реализован класс для обработки событий
 обновлений. Класс представлен в примере для свойства [IUpdateCallback.OnCallback](../IUpdateCallback/IUpdateCallback.OnCallback.htm).


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	Begin

	    Mb := MetabaseClass.Active;

	    Mb.UpdateHandler := "MOD_UPDATE.CUpdateCallback";

	End Sub UserProc;


При выполнении примера для репозитория будет определён глобальный обработчик
 событий работы с обновлениями.


См. также:


[IMetabase](IMetabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
