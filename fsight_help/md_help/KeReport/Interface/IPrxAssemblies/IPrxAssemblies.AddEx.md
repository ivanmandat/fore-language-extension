# IPrxAssemblies.AddEx

IPrxAssemblies.AddEx
-


# IPrxAssemblies.AddEx


## Синтаксис


AddEx(Assembly: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm),
 Method: [PamAssemblyMethod](../../Enums/PamAssemblyMethod.htm)):
 Integer;


## Параметры


Assembly. Описание объекта
 среды разработки, который необходимо включить в список объектов, используемых
 в регламентном отчёте;


Method. Способ подключения
 объекта среды разработки к регламентному отчёту.


## Описание


Метод AddEx осуществляет подключение
 объекта среды разработки к регламентному отчёту, входящему в состав формы
 ввода, и возвращает индекс подключённого объекта в списке.


## Комментарии


В список доступных объектов входят все модули, формы, сборки репозитория.


Если при построении формы ввода не планируется [обработка
 событий таблицы](KePivot.chm::/Intro/Hierarchy/Hierarchy_Events.htm), то используйте значение перечисления
 [PamAssemblyMethod.OnlyReport](../../Enums/PamAssemblyMethod.htm)
 в качестве значения параметра Method.
 За счёт данного способа подключения объекта среды разработки к регламентному
 отчёту сокращается время открытия формы ввода.


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта с идентификатором REPORT и модуля с идентификатором MODULE. Модуль
 должен являться [обработчиком
 событий](UIReport.chm::/desktop/Reports/Event/UiReport_Reports_Event.htm).


Добавьте ссылки на системные сборки: Metabase, Report.


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IPrxReport;

    DescrHandle: IMetabaseObjectDescriptor;

    Assemblies: IPrxAssemblies;

    i: Integer;

    isFinded: boolean = False;

Begin

    MB := MetabaseClass.Active;

    // Получим регламентный отчёт

    Report := MB.ItemById("REPORT").Edit As IPrxReport;

    // Получим модуль,
 используемый в качестве обработчика событий

    DescrHandle := MB.ItemById("MODULE");

    // Получим коллекцию объектов среды разработки, подключённых к регламентному отчёту

    Assemblies := Report.Assemblies;

    // Проверим, какие объекты среды разработки подключены только к регламентному отчёту (не к таблице)

    For i := Assemblies.Count - 1 To 0 Step -1 Do

        If Assemblies.Item(i).Key = DescrHandle.Key Then

            If Assemblies.Method(i) = PamAssemblyMethod.OnlyReport Then

                isFinded := True;

            Else

                // Если объект подключён к  отчёту и таблице, то удалим его
 из списка

                Assemblies.Remove(i);

            End If;

        End If;

    End For;

    If Not isFinded Then

        // Подключим модуль только к регламентному отчёту

        Assemblies.AddEx(DescrHandle, PamAssemblyMethod.OnlyReport);

        // Укажем, что модуль является обработчиком событий

        Assemblies.EventsAssembly := Assemblies.Count-1;

        Assemblies.EventsClass := "EventsClass";

    End If;

    // Сохраним изменения

    (Report As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера к регламентному отчёту будет подключён модуль
 в качестве обработчика событий. Если к регламентному отчёту и таблице
 ранее были подключены объекты среды разработки, то они будут удалены из
 списка подключённых объектов.


См. также:


[IPrxAssemblies](IPrxAssemblies.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
