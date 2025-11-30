# IMetabaseCustomClass.ImplementationCoreAssembly

IMetabaseCustomClass.ImplementationCoreAssembly
-


# IMetabaseCustomClass.ImplementationCoreAssembly


## Синтаксис


ImplementationCoreAssembly: [IMetabaseObjectDescriptor](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Описание


Свойство ImplementationCoreAssembly
 определяет модуль/сборку, содержащую реализацию класса без визуальных
 зависимостей, который будет обрабатывать [операции](IMetabaseCustomClass.Operations.htm)
 пользовательского класса.


## Комментарии


Свойство используется при настройке объекта пользовательского класса,
 работа с которым будет осуществляться в веб-приложении. В качестве значения
 данного свойства необходимо указать описание модуля/сборки репозитория.
 Сам класс задаётся в свойстве [ImplementationCoreClass](IMetabaseCustomClass.ImplementationCoreClass.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории модуля с
 идентификатором «M_WEB_OPERATIONS». В данном модуле реализован класс для
 обработки операций объектов пользовательских классов.


[![](../../opened.gif)![](../../closed.gif)Текст модуля](javascript:TextPopup(this))


		Class WebOperationsClass: Object

		    Sub Open(MDesc: IMetabaseObjectDescriptor);

		    Begin

		        // Обработка операции "Открыть"

		    End Sub Open;


		    Sub Edit(MDesc: IMetabaseObjectDescriptor);

		    Begin

		        // Обработка операции "Редактировать"

		    End Sub Edit;


		    Sub OpenWithParams(Descr: IMetabaseObjectDescriptor; Params: IMetabaseObjectParamValues);

		    Begin

		        // Обработка операции "Открыть" для параметрических объектов

		    End Sub OpenWithParams;


		    Sub EditWithParams(Descr: IMetabaseObjectDescriptor; Params: IMetabaseObjectParamValues);

		    Begin

		        // Обработка операции "Редактировать" для параметрических объектов

		    End Sub EditWithParams;


		    Sub Delete(MDesc: IMetabaseObjectDescriptor);

		    Begin

		        // Обработка операции "Удалить"

		    End Sub Delete;


		    Sub Paste(MDesc: IMetabaseObjectDescriptor);

		    Begin

		        // Обработка операции "Вставить"

		    End Sub Paste;


		    // Другие обработчики операций

		    //...

		End Class WebOperationsClass;


Добавьте ссылки на системные сборки: Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    CustomClassExtender: IMetabaseCustomExtender;

	    CustomClass: IMetabaseCustomClass;

	Begin

	    Mb := MetabaseClass.Active;

	    // Получение контейнера пользовательских классов

	    CustomClassExtender := Mb.SpecialObject(MetabaseSpecialObject.CustomExtender).Edit As IMetabaseCustomExtender;

	    // Добавление пользовательского класса

	    CustomClass := CustomClassExtender.Classes.Add;

	    CustomClass.Id := "UserObjectClassForWeb";

	    CustomClass.Name := "Тестовый объект для веба";

	    CustomClass.ImplementationCoreAssembly := MB.ItemById("M_WEB_OPERATIONS");

	    CustomClass.ImplementationCoreClass := "WebOperationsClass";

	    // Сохранение изменений

	    (CustomClassExtender As IMetabaseObject).Save;

	End Sub UserProc;


При выполнении примера в контейнере пользовательских классов будет создан
 новый класс объектов. Для класса будут определены базовые свойства. В
 качестве обработчика операций будет указан класс OperationsClass.


См. также:


[IMetabaseCustomClass](IMetabaseCustomClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
