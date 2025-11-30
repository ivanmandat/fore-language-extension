# GetWebForm: Операция

GetWebForm: Операция
-


**


# GetWebForm


## Синтаксис


GetWebFormResult GetWebForm(WebFormId tWebForm)


## Параметры


tWebForm. Моникёр
 открытого экземпляра веб-формы.


## Описание


Операция GetWebForm получает
 метаданные веб-формы, открытой на выполнение.


## Комментарии


Для выполнения операции укажите в поле tWebForm
 моникёр открытого экземпляра веб-формы. Моникёр может быть получен при
 выполнении операции [OpenWebForm](OpenWebForm.htm).


Результатом операции будут полученные метаданные веб-формы.


## Пример


Ниже приведён пример получения метаданных веб-формы, открытой на выполнение.
 В запросе передаётся моникёр открытой веб-формы. В ответе возвращаются
 полученные метаданные.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetWebForm xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tWebForm xmlns="****">
  <id>OLFDALNNBBFEGOAEGJFAPCEOMHPCOHIEIKADOOOFNHINOGAL!M!S!WFJAKDIPNNBBFEGOAEECJOCKDBJGKKGPMEOLCGMNKPBOEAOHAA</id>  </tWebForm>
  </GetWebForm>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetWebFormResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<meta xmlns="****">
  <items />
  <content>{"items":[{"id":"form","type":"form","props":{"text":"Input","name":"OBJ402445WebForm","modal":true,"color":{"a":255,"r":255,"g":255,"b":255},"size":{"width":234,"height":222},"coordinate":{"left":0,"top":0}},"events":{}},{"type":"label","id":"label_kLkZu0pLy__TOeiJvnl5K","props":{"text":"Начальное значение:","name":"Label1","alignment":"left","color":{"a":0,"r":255,"g":255,"b":255},"font":{"name":"Roboto","color":{"a":255,"r":0,"g":0,"b":0},"size":12,"bold":false,"italic":false,"strikeThrough":false,"underline":false},"visible":true,"enabled":true,"hint":"","showHint":true,"size":{},"coordinate":{"top":15,"left":17},"position":"absolute"},"parent":"form","events":{}},{"type":"input","id":"input_jLL25aWLkWL3opLvqNRJQ","props":{"text":"","name":"Input1","placeholder":"Введите значение","color":{"a":0,"r":255,"g":255,"b":255},"font":{"name":"Roboto","color":{"a":255,"r":0,"g":0,"b":0},"size":14,"bold":false,"italic":false,"strikeThrough":false,"underline":false},"visible":true,"enabled":true,"hint":"","showHint":true,"size":{"width":200,"height":32},"coordinate":{"top":35,"left":17},"position":"absolute"},"parent":"form","events":{}},{"type":"label","id":"label_XngwyZ3Xgzod7NqgQXQtd","props":{"text":"Конечное значение:","name":"Label2","alignment":"left","color":{"a":0,"r":255,"g":255,"b":255},"font":{"name":"Roboto","color":{"a":255,"r":0,"g":0,"b":0},"size":12,"bold":false,"italic":false,"strikeThrough":false,"underline":false},"visible":true,"enabled":true,"hint":"","showHint":true,"size":{},"coordinate":{"top":75,"left":17},"position":"absolute"},"parent":"form","events":{}},{"type":"input","id":"input_VGaJ7DAC5T51_ggvP_bul","props":{"text":"","name":"Input2","placeholder":"Введите значение","color":{"a":0,"r":255,"g":255,"b":255},"font":{"name":"Roboto","color":{"a":255,"r":0,"g":0,"b":0},"size":14,"bold":false,"italic":false,"strikeThrough":false,"underline":false},"visible":true,"enabled":true,"hint":"","showHint":true,"size":{"width":200,"height":32},"coordinate":{"top":95,"left":17},"position":"absolute"},"parent":"form","events":{}},{"type":"button","id":"button_INWdSqIoQSDkwA1rq554B","props":{"text":"Сохранить","name":"Button1","color":{"a":255,"r":70,"g":142,"b":240},"font":{"name":"Roboto","color":{"a":255,"r":255,"g":255,"b":255},"size":16,"bold":false,"italic":false,"strikeThrough":false,"underline":false},"visible":true,"enabled":true,"hint":"","showHint":true,"size":{"width":110,"height":32},"coordinate":{"top":171,"left":107},"variant":"primary","position":"absolute"},"parent":"form","events":{"onClick":""}}]}</content>  </meta>
  </GetWebFormResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetWebForm" :
  {
   "tWebForm" :
    {
     "id" : "OLFDALNNBBFEGOAEGJFAPCEOMHPCOHIEIKADOOOFNHINOGAL!M!S!WFJAKDIPNNBBFEGOAEECJOCKDBJGKKGPMEOLCGMNKPBOEAOHAA"
    }
  }
}

### JSON-ответ:


{
 "GetWebFormResult" :
  {
   "meta" :
    {
     "items" : "",
     "content" : "{"items":[{"id":"form","type":"form","props":{"text":"Input","name":"OBJ402445WebForm","modal":true,"color":{"a":255,"r":255,"g":255,"b":255},"size":{"width":234,"height":222},"coordinate":{"left":0,"top":0}},"events":{}},{"type":"label","id":"label_kLkZu0pLy__TOeiJvnl5K","props":{"text":"Начальное значение:","name":"Label1","alignment":"left","color":{"a":0,"r":255,"g":255,"b":255},"font":{"name":"Roboto","color":{"a":255,"r":0,"g":0,"b":0},"size":12,"bold":false,"italic":false,"strikeThrough":false,"underline":false},"visible":true,"enabled":true,"hint":"","showHint":true,"size":{},"coordinate":{"top":15,"left":17},"position":"absolute"},"parent":"form","events":{}},{"type":"input","id":"input_jLL25aWLkWL3opLvqNRJQ","props":{"text":"","name":"Input1","placeholder":"Введите значение","color":{"a":0,"r":255,"g":255,"b":255},"font":{"name":"Roboto","color":{"a":255,"r":0,"g":0,"b":0},"size":14,"bold":false,"italic":false,"strikeThrough":false,"underline":false},"visible":true,"enabled":true,"hint":"","showHint":true,"size":{"width":200,"height":32},"coordinate":{"top":35,"left":17},"position":"absolute"},"parent":"form","events":{}},{"type":"label","id":"label_XngwyZ3Xgzod7NqgQXQtd","props":{"text":"Конечное значение:","name":"Label2","alignment":"left","color":{"a":0,"r":255,"g":255,"b":255},"font":{"name":"Roboto","color":{"a":255,"r":0,"g":0,"b":0},"size":12,"bold":false,"italic":false,"strikeThrough":false,"underline":false},"visible":true,"enabled":true,"hint":"","showHint":true,"size":{},"coordinate":{"top":75,"left":17},"position":"absolute"},"parent":"form","events":{}},{"type":"input","id":"input_VGaJ7DAC5T51_ggvP_bul","props":{"text":"","name":"Input2","placeholder":"Введите значение","color":{"a":0,"r":255,"g":255,"b":255},"font":{"name":"Roboto","color":{"a":255,"r":0,"g":0,"b":0},"size":14,"bold":false,"italic":false,"strikeThrough":false,"underline":false},"visible":true,"enabled":true,"hint":"","showHint":true,"size":{"width":200,"height":32},"coordinate":{"top":95,"left":17},"position":"absolute"},"parent":"form","events":{}},{"type":"button","id":"button_INWdSqIoQSDkwA1rq554B","props":{"text":"Сохранить","name":"Button1","color":{"a":255,"r":70,"g":142,"b":240},"font":{"name":"Roboto","color":{"a":255,"r":255,"g":255,"b":255},"size":16,"bold":false,"italic":false,"strikeThrough":false,"underline":false},"visible":true,"enabled":true,"hint":"","showHint":true,"size":{"width":110,"height":32},"coordinate":{"top":171,"left":107},"variant":"primary","position":"absolute"},"parent":"form","events":{"onClick":""}}]}"
    }
  }
}


public static GetWebFormResult GetWebForm(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetWebForm()
    {
        tWebForm = new WebFormId() { id = moniker }
    };
    // Получение метаданных веб-формы
    var result = somClient.GetWebForm(tGet);
    return result;
}


См. также:


[Работа
 со средой разработки](DevEnv_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
