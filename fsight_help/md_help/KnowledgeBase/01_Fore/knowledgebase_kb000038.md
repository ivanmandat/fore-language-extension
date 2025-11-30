# Работа с видео

Работа с видео
-


# Работа с видео


Во время разработки прикладного приложения может возникнуть необходимость
 воспроизведения на форме какого-либо видеофайла. Например, это может быть
 краткая призентация с информацией о приложении или видео, которое будет
 проигрываться во время выполнения какого-либо длительного процесса. Для
 воспроизведения видео можно воспользоваться проигрывателем Windows Media,
 который входит в состав операционных систем Windows. Проигрыватель можно
 загрузить в компонент [OleDocumentBox](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/OleDocumentBox.htm).
 COM-объект Windows Media имеет программный идентификатор «MediaPlayer.MediaPlayer.1»,
 укажите его в методе [CreateObject](ModForms.chm::/Interface/IOleDocumentBox/IOleDocumentBox.CreateObject.htm)
 для создания экземпляра проигрывателя:


	Class TESTForm: Form

	    OleDocumentBox1: OleDocumentBox;


	    Sub TESTFormOnCreate(Sender: Object; Args: IEventArgs);

	    Begin

	        OleDocumentBox1.CreateObject("MediaPlayer.MediaPlayer.1");

	    End Sub TESTFormOnCreate;

	End Class TESTForm;


Далее, используя свойство [OleObject](ModForms.chm::/Interface/IOleDocumentBox/IOleDocumentBox.OleObject.htm),
 можно управлять проигрывателем. Укажите проигрываемый файл:


OleDocumentBox1.OleObject.SetProperty("FileName", "C:\Video\start.avi");


По умолчанию осуществляется автоматическое воспроизведение, если необходимо
 его отключить, то задайте свойству «autoStart» значение False:


OleDocumentBox1.OleObject.SetProperty("autoStart", False);


Используйте методы Play, Pause, Stop и другие для управления воспроизведением
 файла:


OleDocumentBox1.OleObject.Invoke("Play", New Variant[0]);


OleDocumentBox1.OleObject.Invoke("Pause", New Variant[0]);


OleDocumentBox1.OleObject.Invoke("Stop", New Variant[0]);


Для того, чтобы более подробно узнать какие функции доступны при работе
 с проигрывателем Windows Media, изучите его объектную модель. Описание
 доступно в [MSDN](https://msdn.microsoft.com/ru-ru/library/windows/desktop/dd564680(v%3dvs.85).aspx).


Если на компьютере установлены другие проигрыватели, имеющие в своей
 реализации COM-объект, то указанный выше код может быть переделан для
 работы с этими проигрывателями.


См. также:


[База
 знаний разработчиков](../KnowledgeBase_Intro.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
