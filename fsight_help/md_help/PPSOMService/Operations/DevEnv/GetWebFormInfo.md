# GetWebFormInfo: Операция

GetWebFormInfo: Операция
-


**


# GetWebFormInfo


## Синтаксис


GetWebFormInfoResult GetWebFormInfo(OdId tOb)


## Параметры


tOb. Моникёр
 объекта репозитория, являющегося веб-формой.


## Описание


Операция GetWebFormInfo получает
 метаданные веб-формы.


## Комментарии


Для выполнения операции укажите в поле tOb
 моникёр объекта репозитория, являющегося веб-формой. Моникёр может быть
 получен при выполнении операции [GetObjects](../Repository/GetObjects.htm).


Результатом выполнения операции будут полученные метаданные веб-формы.


## Пример


Ниже приведён пример получения метаданных веб-формы. В запросе передаётся
 моникёр объекта репозитория, являющегося веб-формой. В ответе возвращаются
 полученные метаданные.


В примере C# используется функция FindObjectById,
 код которой приведён в примере «[Получение
 описания объекта по его идентификатору](../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetWebFormInfo xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tOb xmlns="****">
  <id>OLFDALNNBBFEGOAEGJFAPCEOMHPCOHIEIKADOOOFNHINOGAL!M!402446</id>  </tOb>
  </GetWebFormInfo>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetWebFormInfoResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <content xmlns="****">{"items":[{"id":"form","type":"form","props":{"text":"Input","name":"OBJ402445WebForm","modal":true,"color":{"a":255,"r":255,"g":255,"b":255},"size":{"width":234,"height":222},"coordinate":{"left":0,"top":0}},"events":{}},{"type":"label","id":"label_kLkZu0pLy__TOeiJvnl5K","props":{"text":"Начальное значение:","name":"Label1","alignment":"left","color":{"a":0,"r":255,"g":255,"b":255},"font":{"name":"Roboto","color":{"a":255,"r":0,"g":0,"b":0},"size":12,"bold":false,"italic":false,"strikeThrough":false,"underline":false},"visible":true,"enabled":true,"hint":"","showHint":true,"size":{},"coordinate":{"top":15,"left":17},"position":"absolute"},"parent":"form","events":{}},{"type":"input","id":"input_jLL25aWLkWL3opLvqNRJQ","props":{"text":"","name":"Input1","placeholder":"Введите значение","color":{"a":0,"r":255,"g":255,"b":255},"font":{"name":"Roboto","color":{"a":255,"r":0,"g":0,"b":0},"size":14,"bold":false,"italic":false,"strikeThrough":false,"underline":false},"visible":true,"enabled":true,"hint":"","showHint":true,"size":{"width":200,"height":32},"coordinate":{"top":35,"left":17},"position":"absolute"},"parent":"form","events":{}},{"type":"label","id":"label_XngwyZ3Xgzod7NqgQXQtd","props":{"text":"Конечное значение:","name":"Label2","alignment":"left","color":{"a":0,"r":255,"g":255,"b":255},"font":{"name":"Roboto","color":{"a":255,"r":0,"g":0,"b":0},"size":12,"bold":false,"italic":false,"strikeThrough":false,"underline":false},"visible":true,"enabled":true,"hint":"","showHint":true,"size":{},"coordinate":{"top":75,"left":17},"position":"absolute"},"parent":"form","events":{}},{"type":"input","id":"input_VGaJ7DAC5T51_ggvP_bul","props":{"text":"","name":"Input2","placeholder":"Введите значение","color":{"a":0,"r":255,"g":255,"b":255},"font":{"name":"Roboto","color":{"a":255,"r":0,"g":0,"b":0},"size":14,"bold":false,"italic":false,"strikeThrough":false,"underline":false},"visible":true,"enabled":true,"hint":"","showHint":true,"size":{"width":200,"height":32},"coordinate":{"top":95,"left":17},"position":"absolute"},"parent":"form","events":{}},{"type":"button","id":"button_INWdSqIoQSDkwA1rq554B","props":{"text":"Сохранить","name":"Button1","color":{"a":255,"r":70,"g":142,"b":240},"font":{"name":"Roboto","color":{"a":255,"r":255,"g":255,"b":255},"size":16,"bold":false,"italic":false,"strikeThrough":false,"underline":false},"visible":true,"enabled":true,"hint":"","showHint":true,"size":{"width":110,"height":32},"coordinate":{"top":171,"left":107},"variant":"primary","position":"absolute"},"parent":"form","events":{"onClick":""}}]}</content>  </GetWebFormInfoResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetWebFormInfo" :
  {
   "tOb" :
    {
     "id" : "OLFDALNNBBFEGOAEGJFAPCEOMHPCOHIEIKADOOOFNHINOGAL!M!402446"
    }
  }
}

### JSON-ответ:


{
 "GetWebFormInfoResult" :
  {
   "content" : "{"items":[{"id":"form","type":"form","props":{"text":"Input","name":"OBJ402445WebForm","modal":true,"color":{"a":255,"r":255,"g":255,"b":255},"size":{"width":234,"height":222},"coordinate":{"left":0,"top":0}},"events":{}},{"type":"label","id":"label_kLkZu0pLy__TOeiJvnl5K","props":{"text":"Начальное значение:","name":"Label1","alignment":"left","color":{"a":0,"r":255,"g":255,"b":255},"font":{"name":"Roboto","color":{"a":255,"r":0,"g":0,"b":0},"size":12,"bold":false,"italic":false,"strikeThrough":false,"underline":false},"visible":true,"enabled":true,"hint":"","showHint":true,"size":{},"coordinate":{"top":15,"left":17},"position":"absolute"},"parent":"form","events":{}},{"type":"input","id":"input_jLL25aWLkWL3opLvqNRJQ","props":{"text":"","name":"Input1","placeholder":"Введите значение","color":{"a":0,"r":255,"g":255,"b":255},"font":{"name":"Roboto","color":{"a":255,"r":0,"g":0,"b":0},"size":14,"bold":false,"italic":false,"strikeThrough":false,"underline":false},"visible":true,"enabled":true,"hint":"","showHint":true,"size":{"width":200,"height":32},"coordinate":{"top":35,"left":17},"position":"absolute"},"parent":"form","events":{}},{"type":"label","id":"label_XngwyZ3Xgzod7NqgQXQtd","props":{"text":"Конечное значение:","name":"Label2","alignment":"left","color":{"a":0,"r":255,"g":255,"b":255},"font":{"name":"Roboto","color":{"a":255,"r":0,"g":0,"b":0},"size":12,"bold":false,"italic":false,"strikeThrough":false,"underline":false},"visible":true,"enabled":true,"hint":"","showHint":true,"size":{},"coordinate":{"top":75,"left":17},"position":"absolute"},"parent":"form","events":{}},{"type":"input","id":"input_VGaJ7DAC5T51_ggvP_bul","props":{"text":"","name":"Input2","placeholder":"Введите значение","color":{"a":0,"r":255,"g":255,"b":255},"font":{"name":"Roboto","color":{"a":255,"r":0,"g":0,"b":0},"size":14,"bold":false,"italic":false,"strikeThrough":false,"underline":false},"visible":true,"enabled":true,"hint":"","showHint":true,"size":{"width":200,"height":32},"coordinate":{"top":95,"left":17},"position":"absolute"},"parent":"form","events":{}},{"type":"button","id":"button_INWdSqIoQSDkwA1rq554B","props":{"text":"Сохранить","name":"Button1","color":{"a":255,"r":70,"g":142,"b":240},"font":{"name":"Roboto","color":{"a":255,"r":255,"g":255,"b":255},"size":16,"bold":false,"italic":false,"strikeThrough":false,"underline":false},"visible":true,"enabled":true,"hint":"","showHint":true,"size":{"width":110,"height":32},"coordinate":{"top":171,"left":107},"variant":"primary","position":"absolute"},"parent":"form","events":{"onClick":""}}]}"
  }
}


public static GetWebFormInfoResult GetWebFormInfo(MbId mb, string formId)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetWebFormInfo()
    {
        // Формирование моникёра объекта
        tOb = new OdId() { id = mb.id + "!" + FindObjectById(mb, formId).k }
    };
    // Получение метаданных веб-формы
    var result = somClient.GetWebFormInfo(tGet);
    return result;
}


См. также:


[Работа
 со средой разработки](DevEnv_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
