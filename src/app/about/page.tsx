export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with expertise in modern web technologies. 
            I love building applications that solve real-world problems and provide exceptional user experiences.
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                My Journey
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  I started my journey in web development over 5 years ago, and I've been 
                  passionate about creating digital experiences ever since. My background 
                  spans from frontend design to backend architecture, giving me a comprehensive 
                  understanding of the full development stack.
                </p>
                <p>
                  I specialize in building scalable applications using modern technologies 
                  like Next.js, React, Node.js, and PostgreSQL. I believe in writing clean, 
                  maintainable code and following best practices to ensure long-term success.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing 
                  to open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-indigo-200 p-8 rounded-2xl">
              <div className="text-center">
                <div className="w-32 h-32 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">JS</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  JavaScript Enthusiast
                </h3>
                <p className="text-gray-600">
                  Passionate about modern JavaScript and its ecosystem
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Skills & Technologies
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Frontend</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">React</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-5/6"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Next.js</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-4/5"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">TypeScript</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-4/5"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Tailwind CSS</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-5/6"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Backend</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Node.js</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-4/5"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">PostgreSQL</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-4/5"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Prisma</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">REST APIs</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-5/6"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tools */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Tools & Others</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Git</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-5/6"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Docker</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">AWS</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Testing</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
