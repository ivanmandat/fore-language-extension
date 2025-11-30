# IEtlCodeBlock.Module

IEtlCodeBlock.Module
-


# IEtlCodeBlock.Module


## Синтаксис


Module: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Описание


Свойство Module определяет описание
 объекта среды разработки, содержащего реализацию выполняемой процедуры/функции.


## Комментарии


В качестве значения свойства может быть указано описание какого-либо
 модуля/формы/сборки репозитория.


## Пример


Для выполнения примера предполагается наличие в репозитории задачи ETL
 с идентификатором «OBJ_ETL» и модуля «ETL_Module». В модуле реализована
 процедура «RunExport». Добавьте ссылки на системные сборки: Andy, Drawing,
 Etl, Metabase.


        Sub CreateCodeBlock;

        Var

            MB: IMetabase;

            Task: IEtlTask;

            ProcedureObj: IEtlCodeBlock;

            WxConsumer: IWxRectangle;

            WxETLConsumer: IWxEtlObject;

        Begin

            MB := MetabaseClass.Active;

            Task := MB.ItemById("OBJ_ETL").Edit As IEtlTask;


            //Создание объекта Процедура

            ProcedureObj := Task.Create(EtlObjectType.CodeBlock) As IEtlCodeBlock;

            ProcedureObj := ProcedureObj.Edit;


            //Настройка параметров

            ProcedureObj.Module := MB.ItemById("ETL_Module");

            ProcedureObj.Procedure := "RunExport";


            //Сохранение объекта
            Процедура

            ProcedureObj.Save;


            //Начало создания визуального объекта

            WxConsumer := Task.Workspace.CreateRectangle;

            WxETLConsumer := New WxEtlObject.Create;


            WxETLConsumer.EtlObject := ProcedureObj;

            WxConsumer.Style.TextPosition := WxTextPosition.Bottom;

            WxConsumer.Style.PictureMarginTop := -10;

            WxConsumer.PinPosition := New GxPointF.Create(50, 50);

            WxConsumer.Extension := WxETLConsumer As IWxShapeExtension;


            //Конец создания визуального объекта


            //Сохранение задачи ETL

            (Task As IMetabaseObject).Save;

        End Sub CreateCodeBlock;


При выполнении примера в задаче ETL будет создан новый объект, осуществляющий
 запуск процедуры. Для объекта будут настроены необходимые для выполнения
 параметры: указан модуль запускаемая процедура.


См. также:


[IEtlCodeBlock](IEtlCodeBlock.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
