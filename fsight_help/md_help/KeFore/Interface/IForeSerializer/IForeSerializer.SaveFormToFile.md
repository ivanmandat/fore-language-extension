# IForeSerializer.SaveFormToFile

IForeSerializer.SaveFormToFile
-


# IForeSerializer.SaveFormToFile


## Синтаксис


SaveFormToFile(Form: [IForm](KeSom.chm::/Interface/IForm/IForm.htm); FileName: String);


## Параметры


Form - форма репозитория, которую необходимо сохранить в файл.


FileName - путь и наименование файла, в который будет сохранена форма.


## Описание


Метод SaveFormToFile сохраняет форму в указанный файл.


## Комментарии


Для файла, в который будет сохранена форма, должно быть указано расширение «ppform».


## Пример


Для выполнения примера предполагается наличие в репозитории формы с идентификатором «Form_1».


			Sub UserProc;

Var

    MB: IMetabase;

    Fs: IForeSerializer;

    MObj: IMetabaseObjectDescriptor;

    ForeForm: IForm;

Begin

    MB := MetabaseClass.Active;

    Fs := New ForeSerializer.Create;

    MObj := MB.ItemById("Form_1");

    ForeForm := MObj.Bind As IForm;

    Fs.SaveFormToFile(ForeForm, "c:\" + MObj.Id + ".ppform");

End Sub UserProc;


После выполнения примера указанная форма будет сохранена в файл в корневом каталоге диска С.


См. также:


[IForeSerializer](IForeSerializer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
