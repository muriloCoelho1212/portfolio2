import octokit from 'src/http';

class MostUsedLanguagesService {
  async getMostUsedLanguages() {
    return (await octokit.request('GET /repos/{owner}/{repo}/languages')).data;
  }
}

export default new MostUsedLanguagesService();
