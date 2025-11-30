# IPrxAssemblies.Add

IPrxAssemblies.Add
-


# IPrxAssemblies.Add


## Синтаксис


		Add(Assembly: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm)):
		 Integer;


## Параметры


Assembly.
 Описание объекта среды разработки, который необходимо включить в список
 объектов, используемых в регламентном отчёте.


## Описание


Метод Add осуществляет подключение
 объекта среды разработки к регламентному отчёту и возвращает индекс подключённого
 объекта в списке.


## Комментарии


В список доступных объектов входят все модули, формы, сборки репозитория.


Объект среды разработки подключается к регламентному отчёту и таблице
 для дальнейшей [обработки
 событий](KePivot.chm::/Intro/Hierarchy/Hierarchy_Events.htm).


Для подключения объекта среды разработки к регламентному отчёту, входящему
 в состав формы ввода, используйте метод [IPrxAssemblies.AddEx](IPrxAssemblies.AddEx.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчёта с идентификатором REPORT и модуля с идентификатором MODULE.


Добавьте ссылки на системные сборки: Metabase, Report.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    MObj: IMetabaseObject;

		    MBDesc: IMetabaseObjectDescriptor;

		    Report: IPrxReport;

		    Assemb: IPrxAssemblies;

		    i: Integer;

		Begin

		    MB := MetabaseClass.Active;

		    MBDesc := MB.ItemById("MODULE");

		    MObj := MB.ItemById("REPORT").Edit;

		    Report := MObj As IPrxReport;

		    Assemb := Report.Assemblies;

		    i := Assemb.Add(MBDesc);

		    MObj.Save;

		End Sub UserProc;


После выполнения примера к регламентному отчёту будет подключён указанный
 модуль и в переменной «i» будет содержаться индекс данного модуля в общем
 списке.


См. также:


[IPrxAssemblies](IPrxAssemblies.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
