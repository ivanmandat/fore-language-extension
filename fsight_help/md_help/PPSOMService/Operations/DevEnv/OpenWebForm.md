# OpenWebForm: Операция

OpenWebForm: Операция
-


**


# OpenWebForm


## Синтаксис


OpenWebFormResult OpenWebForm(OdId tOb, OpenWebFormArg
 tArg)


## Параметры


tOb. Моникёр
 объекта репозитория, являющегося веб-формой.


tArg. Параметры выполнения
 операции.


## Описание


Операция OpenWebForm открывает
 веб-форму.


## Комментарии


Операция позволяет получить доступ к метаданным и коду веб-формы. Для
 выполнения операции укажите в поле tOb
 моникёр объекта репозитория, являющегося веб-формой, а в поле tArg
 параметры открытия. Моникёр может быть получен при выполнении операции
 [GetObjects](../Repository/GetObjects.htm). В поле tArg.meta
 задайте пустые значения или значения по умолчанию для тех полей, значения
 которых необходимо получить.


Результатом выполнения операции будет моникёр открытого экземпляра веб-формы
 и метаданные, если было определено поле tArg.meta.


## Пример


Ниже приведён пример открытия веб-формы. В запросе передаётся моникёр
 объекта репозитория, являющегося веб-формой. В ответе возвращается моникёр
 открытого экземпляра веб-формы.


В примере C# используется функция FindObjectById,
 код которой приведён в примере «[Получение
 описания объекта по его идентификатору](../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<OpenWebForm xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tOb xmlns="****">
  <id>OLFDALNNBBFEGOAEGJFAPCEOMHPCOHIEIKADOOOFNHINOGAL!M!402446</id>  </tOb>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<args>
  <openForEdit>true</openForEdit>  </args>
[![](../../minus.gif)](../../#)<meta>
  <text />
  </meta>
  </tArg>
  </OpenWebForm>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<OpenWebFormResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>OLFDALNNBBFEGOAEGJFAPCEOMHPCOHIEIKADOOOFNHINOGAL!M!S!WFCLOMMLNNBBFEGOAEMLACIMNEFMDKNONEJKFAOPKOCKGPLBAH</id>  </id>
[![](../../minus.gif)](../../#)<meta xmlns="****">
  <text>Class OBJ402445WebForm: WebForm
	Button1: WebButton;
	Input2: WebInput;
	Label2: WebLabel;
	Input1: WebInput;
	Label1: WebLabel;

End Class OBJ402445WebForm;</text>  </meta>
  </OpenWebFormResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "OpenWebForm" :
  {
   "tOb" :
    {
     "id" : "OLFDALNNBBFEGOAEGJFAPCEOMHPCOHIEIKADOOOFNHINOGAL!M!402446"
    },
   "tArg" :
    {
     "args" :
      {
       "openForEdit" : "true"
      },
     "meta" :
      {
       "text" : ""
      }
    }
  }
}

### JSON-ответ:


{
 "OpenWebFormResult" :
  {
   "id" :
    {
     "id" : "OLFDALNNBBFEGOAEGJFAPCEOMHPCOHIEIKADOOOFNHINOGAL!M!S!WFCLOMMLNNBBFEGOAEMLACIMNEFMDKNONEJKFAOPKOCKGPLBAH"
    },
   "meta" :
    {
     "text" : "Class OBJ402445WebForm: WebForm
\tButton1: WebButton;
\tInput2: WebInput;
\tLabel2: WebLabel;
\tInput1: WebInput;
\tLabel1: WebLabel;
\t
End Class OBJ402445WebForm;"
    }
  }
}


public static OpenWebFormResult OpenWebForm(MbId mb, string formId, bool forEdit = false)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tOpen = new OpenWebForm()
    {
        tArg = new OpenWebFormArg()
        {
            args = new WebFormOpenArgs()
            {
                openForEdit = forEdit
            },
            meta = new GetWebFormMD()
            {
                text = string.Empty
            }
        },
        // Формирование моникёра объекта
        tOb = new OdId() { id = mb.id + "!" + FindObjectById(mb, formId).k }
    };
    // Открытие веб-формы
    var result = somClient.OpenWebForm(tOpen);
    return result;
}


См. также:


[Работа
 со средой разработки](DevEnv_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
